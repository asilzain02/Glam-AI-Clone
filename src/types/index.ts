export type ProjectKind = 'photo' | 'video' | 'story' | 'carousel' | 'reel';
export type GenerationStatus = 'queued' | 'processing' | 'completed' | 'failed';

export type GlamProject = {
  id: string;
  title: string;
  kind: ProjectKind;
  coverUrl: string;
  status: GenerationStatus;
  updatedAt: string;
  format: '9:16' | '4:5' | '1:1';
};

export type AIEffect = {
  id: string;
  title: string;
  subtitle: string;
  category: 'beauty' | 'filter' | 'video' | 'creator';
  gradient: readonly string[];
  icon: string;
  prompt: string;
};

export type AIGenerationRequest = {
  imageUri?: string;
  videoUri?: string;
  maskUri?: string;
  effectId: string;
  prompt: string;
  strength?: number;
};

export type AIGenerationResult = {
  id: string;
  outputUrl: string;
  provider: 'openai' | 'replicate' | 'removebg' | 'ffmpeg' | 'mock';
  status: GenerationStatus;
  logs: string[];
};
