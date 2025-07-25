import { create } from 'zustand'

interface SnakeStore {
    chancesLeft: number;
    decreaseChancesLeft: () => void;
    resetChancesLeft: () => void;
    updateChancesLeft: (newChancesLeft: number) => void;
}

export const useSnakeStore = create<SnakeStore>((set) => ({
    chancesLeft: 10,
    decreaseChancesLeft: () => set((state: { chancesLeft: number }) => ({ chancesLeft: state.chancesLeft - 1 })),
    resetChancesLeft: () => set({ chancesLeft: 10 }),
    updateChancesLeft: (newChancesLeft: number) => set({ chancesLeft: newChancesLeft }),
}));