import { create } from "zustand";

interface StarState {
    view: any;
    setView: (view: any) => void;
}

// Zustand Store
export const useStarStore = create<StarState>((set) => ({
    view: "POST",
    setView: (view) => set({ view })
}));
