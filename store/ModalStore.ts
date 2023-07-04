import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  openModal: () => void;
  clodeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  clodeModal: () => set({ isOpen: false }),
}));
