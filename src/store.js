import { create } from "zustand";

const useStore = create((set) => ({
  home: false,
  hideHome() {
    set({ home: true });
  },
}));

export default useStore;
