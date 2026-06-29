import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const Body = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
});

const OWNER_EMAIL = "tharshithreddy433@gmail.com";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        let payload: z.infer<typeof Body>;
        try {
          payload = Body.parse(await request.json());
        } catch {
          return Response.json(
            { error: "bad_request", message: "Please fill in all fields correctly." },
            { status: 400 },
          );
        }

        const ua = request.headers.get("user-agent") ?? null;

        // Always persist the message so Harshith never loses a lead.
        const { error: dbErr } = await supabaseAdmin
          .from("contact_messages")
          .insert({
            name: payload.name,
            email: payload.email,
            message: payload.message,
            user_agent: ua,
          });

        if (dbErr) {
          console.error("Failed to save contact message", dbErr);
          return Response.json(
            { error: "server_error", message: "Could not save your message. Please email me directly." },
            { status: 500 },
          );
        }

        // Best-effort email notification via Resend if a key is configured.
        const resendKey = process.env.RESEND_API_KEY;
        const resendFrom = process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>";
        if (resendKey) {
          try {
            const html = `
              <h2>New portfolio contact message</h2>
              <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
              <p><strong>Message:</strong></p>
              <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(payload.message)}</pre>
            `;
            await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendKey}`,
              },
              body: JSON.stringify({
                from: resendFrom,
                to: [OWNER_EMAIL],
                reply_to: payload.email,
                subject: `Portfolio contact from ${payload.name}`,
                html,
              }),
            });
          } catch (err) {
            console.error("Resend email failed", err);
          }
        }

        return Response.json({ ok: true });
      },
    },
  },
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
