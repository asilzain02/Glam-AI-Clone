-- Demo auth user must be created via Supabase Auth Admin/API using email demo@glamai.com and password demo123.
-- After creating the auth user, replace the UUID below or run this as a seed script with your demo user's ID.
do $$
declare demo_user uuid := '00000000-0000-0000-0000-000000000008';
begin
  insert into public.users (id, email, full_name, plan, ai_credits)
  values (demo_user, 'demo@glamai.com', 'Demo Creator', 'pro', 500)
  on conflict (id) do nothing;

  insert into public.projects (user_id, title, kind, cover_url, status, settings)
  values
    (demo_user, 'Golden Hour GlowUp', 'photo', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop', 'completed', '{"effect":"Beauty Pro","format":"4:5"}'),
    (demo_user, 'Cinematic Reel Export', 'reel', 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1200&auto=format&fit=crop', 'completed', '{"duration":12,"format":"9:16"}'),
    (demo_user, 'Magazine Cover Story', 'story', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop', 'processing', '{"template":"cover"}');

  insert into public.ai_generations (user_id, provider, feature, prompt, output_url, status, logs)
  values
    (demo_user, 'openai', 'Beauty Enhancement', 'Premium beauty retouch with natural skin texture.', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop', 'completed', '["Prompt built", "Image generated", "Saved to exports"]'),
    (demo_user, 'ffmpeg', 'AI Reel Generator', 'Create 9:16 reel with zoom transitions and captions.', 'demo-reel.mp4', 'completed', '["Timeline built", "FFmpeg command generated", "Export complete"]');
end $$;
