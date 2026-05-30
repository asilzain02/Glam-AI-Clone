import { AIEffect, GlamProject } from '@/types';

export const demoImages = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1200&auto=format&fit=crop'
];

export const effects: AIEffect[] = [
  { id: 'beauty-pro', title: 'Beauty Pro', subtitle: 'Skin, eyes, lips, glow', category: 'beauty', gradient: ['#FF4D8D', '#8B5CF6'], icon: '✨', prompt: 'Premium beauty retouch with natural skin texture, enhanced eyes, editorial makeup.' },
  { id: 'bg-luxury', title: 'Luxury Background', subtitle: 'Remove + replace studio', category: 'filter', gradient: ['#8B5CF6', '#0F172A'], icon: '🏙️', prompt: 'Remove background and place subject in luxury editorial studio lighting.' },
  { id: 'object-clean', title: 'Object Eraser', subtitle: 'Brush unwanted details', category: 'beauty', gradient: ['#6EE7B7', '#8B5CF6'], icon: '🪄', prompt: 'Inpaint selected mask area and reconstruct clean realistic background.' },
  { id: 'anime', title: 'Anime Muse', subtitle: 'Viral stylized portrait', category: 'filter', gradient: ['#FF9A9E', '#FAD0C4'], icon: '🌸', prompt: 'Transform portrait into high-end anime fashion art.' },
  { id: 'barbie', title: 'Barbie Dream', subtitle: 'Pink glam aesthetic', category: 'filter', gradient: ['#FF4D8D', '#FFB3D1'], icon: '💖', prompt: 'Glossy pink Barbie inspired editorial portrait.' },
  { id: 'cinematic', title: 'Cinematic', subtitle: 'Film grade + bokeh', category: 'filter', gradient: ['#F9E7C8', '#8B5CF6'], icon: '🎬', prompt: 'Cinematic color grade, lens bloom, subtle grain, luxury fashion lighting.' },
  { id: 'magazine', title: 'Magazine Cover', subtitle: 'Cover-ready layout', category: 'creator', gradient: ['#F9E7C8', '#FF4D8D'], icon: '📰', prompt: 'Create a luxury magazine cover with confident typography and beauty editorial framing.' },
  { id: 'ai-reel', title: 'AI Reel Generator', subtitle: 'Photos → viral 9:16 video', category: 'video', gradient: ['#8B5CF6', '#FF4D8D'], icon: '🎞️', prompt: 'Generate a vertical reel with beat cuts, zoom transitions, captions, and music.' }
];

export const demoProjects: GlamProject[] = [
  { id: 'p1', title: 'Golden Hour GlowUp', kind: 'photo', coverUrl: demoImages[0], status: 'completed', updatedAt: 'Today', format: '4:5' },
  { id: 'p2', title: 'Cinematic Reel Export', kind: 'reel', coverUrl: demoImages[1], status: 'completed', updatedAt: 'Yesterday', format: '9:16' },
  { id: 'p3', title: 'Magazine Cover Story', kind: 'story', coverUrl: demoImages[2], status: 'processing', updatedAt: '2 days ago', format: '9:16' },
  { id: 'p4', title: 'Carousel Launch Pack', kind: 'carousel', coverUrl: demoImages[3], status: 'completed', updatedAt: 'May 30', format: '4:5' }
];

export const demoAccount = { email: 'demo@glamai.com', password: 'demo123' };
