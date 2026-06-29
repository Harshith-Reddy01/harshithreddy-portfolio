create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  user_agent text,
  created_at timestamptz not null default now()
);

grant select, insert on public.contact_messages to service_role;

alter table public.contact_messages enable row level security;
-- No CREATE POLICY: anon/authenticated cannot access; only service_role (server) can.