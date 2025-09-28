import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

interface Movie {
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  budget: number;
  revenue: number;
  genres: {
    id: number;
    name: string;
  }[];
  origin_country: Array<string>;
  spoken_languages: {
    english_name: string;
  }[];
}

export default function MovieDetail() {
  const { id } = useParams();
  const [fetchResponse, setFetchResponse] = useState<Movie | null>(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        setFetchResponse(response.data);
        console.log(response.data);
      });
  }, [id]);

  if (!fetchResponse) {
    return (
      <div className="bg-[#121620] min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading movie details...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#121620] min-h-screen text-white">
      {/* Header with Back Button */}
      <div className="bg-[#1d2130] px-6 py-4 shadow-lg">
        <Link to={"/"}>
          <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Movie Poster */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <img
                src={`https://image.tmdb.org/t/p/w500${fetchResponse.poster_path}`}
                alt={fetchResponse.title}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Movie Details */}
          <div className="lg:w-2/3 space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-amber-400">
                {fetchResponse.title}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center bg-amber-500 text-black px-3 py-1 rounded-full font-bold">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {fetchResponse.vote_average.toFixed(1)}/10
                </div>
                <div className="text-gray-400 text-lg">
                  {fetchResponse.release_date}
                </div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-amber-400">
                Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {fetchResponse.overview}
              </p>
            </div>

            {/* Genres */}
            {fetchResponse.genres && fetchResponse.genres.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                  Genres
                </h3>
                <div className="flex flex-wrap gap-2">
                  {fetchResponse.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-[#1d2130] text-white px-3 py-2 rounded-full text-sm border border-amber-500"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Movie Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget & Revenue */}
              <div className="bg-[#1d2130] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-amber-400">
                  Financial
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">Budget:</span>
                    <div className="text-white font-semibold">
                      {fetchResponse.budget
                        ? `$${fetchResponse.budget.toLocaleString()}`
                        : "N/A"}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Revenue:</span>
                    <div className="text-white font-semibold">
                      {fetchResponse.revenue
                        ? `$${fetchResponse.revenue.toLocaleString()}`
                        : "N/A"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages & Country */}
              <div className="bg-[#1d2130] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-amber-400">
                  Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">Country:</span>
                    <div className="text-white font-semibold">
                      {fetchResponse.origin_country?.[0] || "N/A"}
                    </div>
                  </div>
                  {fetchResponse.spoken_languages &&
                    fetchResponse.spoken_languages.length > 0 && (
                      <div>
                        <span className="text-gray-400">Languages:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {fetchResponse.spoken_languages.map(
                            (language, index) => (
                              <span
                                key={index}
                                className="text-white text-sm bg-gray-700 px-2 py-1 rounded"
                              >
                                {language.english_name}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
