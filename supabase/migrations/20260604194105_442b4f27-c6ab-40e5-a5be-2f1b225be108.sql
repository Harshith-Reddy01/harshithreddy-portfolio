
DROP POLICY IF EXISTS "Anyone can create chat sessions" ON public.chat_sessions;
DROP POLICY IF EXISTS "Anyone can touch chat sessions" ON public.chat_sessions;
DROP POLICY IF EXISTS "Anyone can insert chat messages" ON public.chat_messages;

REVOKE ALL ON public.chat_sessions FROM anon, authenticated;
REVOKE ALL ON public.chat_messages FROM anon, authenticated;
