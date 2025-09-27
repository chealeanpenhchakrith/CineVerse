import { create } from "zustand";

const useStore = create((set) => ({
  input: "",
  home: false,
  hideHome() {
    set({ home: true });
  },
  updateResponse(response) {
    set({ fetchResponse: response });
  },
  fetchResponse: {},
}));

export default useStore;
