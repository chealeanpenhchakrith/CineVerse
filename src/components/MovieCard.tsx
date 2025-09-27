import useStore from "../store.js";

interface Movie {
  id: number;
  original_title: string;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  video: boolean;
}

export default function MovieCard() {
  const { fetchResponse } = useStore();

  if (!fetchResponse || !fetchResponse.results) {
    return <div className="text-white">No movies to display</div>;
  }
  const pageResult = fetchResponse.results;
  return (
    <>
      {pageResult.map((movie: Movie) => (
        <div key={movie.id} className="text-white">
          <h1>{movie.original_title}</h1>
          <h1>{movie.original_language}</h1>
          <h1>{movie.overview}</h1>
          <h1>{movie.release_date}</h1>
        </div>
      ))}
    </>
  );
}
