// apps/mini-app/src/lib/stores/useUserStore.ts
import { create } from 'zustand';

interface User {
  id: string;
  telegramId: number;
  username: string;
  photoUrl?: string;
  rank: number;
  vp: number;           // Voice Power
  stars: number;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  updateStars: (stars: number) => void;
  updateVP: (vp: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateStars: (stars) =>
    set((state) => ({
      user: state.user ? { ...state.user, stars } : null,
    })),
  updateVP: (vp) =>
    set((state) => ({
      user: state.user ? { ...state.user, vp } : null,
    })),
}));