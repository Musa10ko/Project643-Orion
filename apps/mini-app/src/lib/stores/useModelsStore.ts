// apps/mini-app/src/lib/stores/useModelsStore.ts
import { create } from 'zustand';

interface Model {
  id: string;
  name: string;
  image: string;
  floor: number;
  votes: number;
}

interface ModelsStore {
  models: Model[];
  setModels: (models: Model[]) => void;
  updateVotes: (modelId: string, votes: number) => void;
}

export const useModelsStore = create<ModelsStore>((set) => ({
  models: [],
  setModels: (models) => set({ models }),
  updateVotes: (modelId, votes) =>
    set((state) => ({
      models: state.models.map((m) =>
        m.id === modelId ? { ...m, votes } : m
      ),
    })),
}));