import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useStore from "../store";

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

export default function PopularMovies() {
  const { popularMovies, setPopularMovies } = useStore();

  useEffect(() => {
    // Fetch popular movies when component mounts
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        setPopularMovies(response.data.results);
        console.log("Popular movies:", response.data.results);
        console.log(
          "First movie poster path:",
          response.data.results[0]?.poster_path
        );
        console.log(
          "Full image URL:",
          `https://image.tmdb.org/t/p/w300${response.data.results[0]?.poster_path}`
        );
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, [setPopularMovies]);

  if (!popularMovies || popularMovies.length === 0) {
    return (
      <div className="text-white text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
        <p className="mt-2">Loading popular movies...</p>
      </div>
    );
  }

  return (
    <div className="text-white">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-400 mb-2">
          🔥 Popular Movies
        </h2>
        <p className="text-gray-400">
          Discover what everyone's watching right now
        </p>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {popularMovies.slice(0, 18).map((movie: Movie) => (
          <Link
            key={movie.id}
            to={`/movie/detail/${movie.id}`}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <div className="bg-[#1d2130] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
              {/* Movie Poster */}
              <div className="relative overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-amber-400 px-2 py-1 rounded-full text-xs font-bold flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {movie.vote_average.toFixed(1)}
                </div>
              </div>

              {/* Movie Info */}
              <div className="p-4">
                <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors">
                  {movie.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  {movie.release_date
                    ? new Date(movie.release_date).getFullYear()
                    : "TBA"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
          View All Popular Movies
        </button>
      </div>
    </div>
  );
}
