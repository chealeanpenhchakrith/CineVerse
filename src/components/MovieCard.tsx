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
      <div className="flex flex-wrap gap-x-30 gap-y-10">
        {pageResult.map((movie: Movie) => (
          <div key={movie.id} className="text-white">
            <img
              className="rounded-t-sm"
              width={200}
              height={200}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="poster"
            />
            <div className="bg-[#1d2130]">
              <div className="flex w-35 flex-wrap rounded-b-sm ">
                <h1>{movie.title}</h1>
              </div>
              <h1>Language : {movie.original_language}</h1>
              <h1>Year : {movie.release_date}</h1>
              <h1>TMDb : {movie.vote_average}/10</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
