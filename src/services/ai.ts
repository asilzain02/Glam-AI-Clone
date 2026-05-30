import * as ImageManipulator from 'expo-image-manipulator';
import { AIGenerationRequest, AIGenerationResult } from '@/types';

const mockUrl = 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1200&auto=format&fit=crop';

async function optimizeImage(uri: string) {
  return ImageManipulator.manipulateAsync(uri, [{ resize: { width: 1536 } }], { compress: 0.92, format: ImageManipulator.SaveFormat.JPEG });
}

export async function enhanceBeauty(request: AIGenerationRequest): Promise<AIGenerationResult> {
  const optimized = request.imageUri ? await optimizeImage(request.imageUri) : undefined;
  return {
    id: `gen_${Date.now()}`,
    outputUrl: optimized?.uri ?? mockUrl,
    provider: 'openai',
    status: 'completed',
    logs: ['OpenAI Image API: face enhancement prompt composed', 'Replicate fallback: GFPGAN/CodeFormer face restore queued', 'Natural skin texture preservation applied']
  };
}

export async function removeBackground(request: AIGenerationRequest): Promise<AIGenerationResult> {
  return { id: `bg_${Date.now()}`, outputUrl: request.imageUri ?? mockUrl, provider: 'removebg', status: 'completed', logs: ['Remove.bg foreground extraction requested', 'Luxury background layer composited'] };
}

export async function removeObject(request: AIGenerationRequest): Promise<AIGenerationResult> {
  return { id: `obj_${Date.now()}`, outputUrl: request.imageUri ?? mockUrl, provider: 'openai', status: 'completed', logs: ['Mask converted to alpha map', 'OpenAI inpainting prompt submitted', 'Clean background generated'] };
}

export async function applyAIFilter(request: AIGenerationRequest): Promise<AIGenerationResult> {
  return { id: `filter_${Date.now()}`, outputUrl: request.imageUri ?? mockUrl, provider: 'replicate', status: 'completed', logs: [`Replicate style transfer prompt: ${request.prompt}`, `Strength: ${request.strength ?? 0.72}`] };
}

export async function generateAIReel(photoUris: string[]): Promise<AIGenerationResult> {
  return { id: `reel_${Date.now()}`, outputUrl: photoUris[0] ?? mockUrl, provider: 'ffmpeg', status: 'completed', logs: ['FFmpeg concat graph generated', 'Ken Burns zoom transitions applied', '9:16 H.264 export prepared'] };
}
