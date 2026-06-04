import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import type { ChatMsg } from "@/lib/ai-gateway.server";

const Body = z.object({
  sessionId: z.string().uuid().optional(),
  message: z.string().min(1).max(2000),
});

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: z.infer<typeof Body>;
        try {
          payload = Body.parse(await request.json());
        } catch {
          return new Response("Bad request", { status: 400 });
        }

        // Ensure a session exists.
        let sessionId = payload.sessionId;
        if (!sessionId) {
          const ua = request.headers.get("user-agent") ?? null;
          const { data, error } = await supabaseAdmin
            .from("chat_sessions")
            .insert({ user_agent: ua })
            .select("id")
            .single();
          if (error || !data) {
            console.error("Failed to create chat session", error);
            return new Response("Server error", { status: 500 });
          }
          sessionId = data.id;
        }

        // Save user message.
        const { error: userErr } = await supabaseAdmin
          .from("chat_messages")
          .insert({ session_id: sessionId, role: "user", content: payload.message });
        if (userErr) {
          console.error("Failed to save user message", userErr);
          return new Response("Server error", { status: 500 });
        }

        // Load history for this session (capped to last 30 messages).
        const { data: history } = await supabaseAdmin
          .from("chat_messages")
          .select("role,content")
          .eq("session_id", sessionId)
          .order("created_at", { ascending: true })
          .limit(30);

        const messages: ChatMsg[] = [
          { role: "system", content: PORTFOLIO_SYSTEM_PROMPT },
          ...((history ?? []).map((m) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          }))),
        ];

        let assistantText = "";
        try {
          assistantText = await lovableChatCompletion({ messages });
        } catch (err) {
          console.error("AI gateway error", err);
          const msg = err instanceof Error ? err.message : "";
          if (msg.includes(" 429")) {
            return Response.json(
              { error: "rate_limited", message: "Too many requests, please slow down." },
              { status: 429 },
            );
          }
          if (msg.includes(" 402")) {
            return Response.json(
              { error: "no_credits", message: "AI credits exhausted. Please contact site owner." },
              { status: 402 },
            );
          }
          return Response.json(
            { error: "ai_failed", message: "AI is unavailable right now." },
            { status: 502 },
          );
        }

        // Save assistant message and bump session activity.
        await supabaseAdmin
          .from("chat_messages")
          .insert({ session_id: sessionId, role: "assistant", content: assistantText });
        await supabaseAdmin
          .from("chat_sessions")
          .update({ last_message_at: new Date().toISOString() })
          .eq("id", sessionId);

        return Response.json({ sessionId, reply: assistantText });
      },
    },
  },
});
