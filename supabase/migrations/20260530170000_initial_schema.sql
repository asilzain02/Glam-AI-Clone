create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  plan text not null default 'free',
  ai_credits integer not null default 25,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  title text not null,
  kind text not null check (kind in ('photo','video','story','carousel','reel')),
  cover_url text,
  source_url text,
  settings jsonb not null default '{}',
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.exports (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  format text not null check (format in ('9:16','4:5','1:1')),
  output_url text not null,
  duration_seconds numeric,
  created_at timestamptz not null default now()
);

create table if not exists public.ai_generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  project_id uuid references public.projects(id) on delete set null,
  provider text not null check (provider in ('openai','replicate','removebg','ffmpeg','mock')),
  feature text not null,
  prompt text not null,
  input_url text,
  output_url text,
  status text not null default 'queued',
  logs jsonb not null default '[]',
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  stripe_customer_id text,
  tier text not null default 'free',
  status text not null default 'active',
  renews_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.usage_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  event text not null,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.projects enable row level security;
alter table public.exports enable row level security;
alter table public.ai_generations enable row level security;
alter table public.subscriptions enable row level security;
alter table public.usage_logs enable row level security;

create policy "Users manage own profile" on public.users for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "Users manage own projects" on public.projects for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users manage own exports" on public.exports for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users manage own generations" on public.ai_generations for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users manage own subscriptions" on public.subscriptions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users manage own usage" on public.usage_logs for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
