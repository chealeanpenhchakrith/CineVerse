import { create } from "zustand";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

interface StoreState {
  input: string;
  home: boolean;
  fetchResponse: any;
  popularMovies: Movie[];
  hideHome: () => void;
  updateResponse: (response: any) => void;
  setPopularMovies: (movies: Movie[]) => void;
}

const useStore = create<StoreState>((set) => ({
  input: "",
  home: false,
  fetchResponse: {},
  popularMovies: [],
  hideHome: () => set({ home: true }),
  updateResponse: (response: any) => set({ fetchResponse: response }),
  setPopularMovies: (movies: Movie[]) => set({ popularMovies: movies }),
}));

export default useStore;
