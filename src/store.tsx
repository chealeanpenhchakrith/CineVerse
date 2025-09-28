import { create } from "zustand";

interface StoreState {
  input: string;
  home: boolean;
  fetchResponse: any;
  hideHome: () => void;
  updateResponse: (response: any) => void;
}

const useStore = create<StoreState>((set) => ({
  input: "",
  home: false,
  fetchResponse: {},
  hideHome: () => set({ home: true }),
  updateResponse: (response: any) => set({ fetchResponse: response }),
}));

export default useStore;
