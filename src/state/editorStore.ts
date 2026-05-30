import { create } from 'zustand';
import { AIEffect, AIGenerationResult, GlamProject } from '@/types';

type EditorState = {
  selectedAsset?: string;
  selectedEffect?: AIEffect;
  projects: GlamProject[];
  generations: AIGenerationResult[];
  setAsset: (uri: string) => void;
  setEffect: (effect: AIEffect) => void;
  addGeneration: (generation: AIGenerationResult) => void;
  setProjects: (projects: GlamProject[]) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  projects: [],
  generations: [],
  setAsset: (selectedAsset) => set({ selectedAsset }),
  setEffect: (selectedEffect) => set({ selectedEffect }),
  addGeneration: (generation) => set((state) => ({ generations: [generation, ...state.generations] })),
  setProjects: (projects) => set({ projects })
}));
