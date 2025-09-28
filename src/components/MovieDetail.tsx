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

  return (
    <>
      <h1>hello</h1>
      <Link to={"/"}>
        <button className="border-2 border-amber-500">Go BACK ASAP</button>
        <img
          src={`https://image.tmdb.org/t/p/w500${fetchResponse?.poster_path}`}
          alt="poster"
        />
        <h1>{fetchResponse?.title}</h1>
        <h1>{fetchResponse?.overview}</h1>
        <h1>{fetchResponse?.vote_average}/10</h1>
        <h1>{fetchResponse?.release_date}</h1>
        <h1>{fetchResponse?.budget}</h1>
        <h1>{fetchResponse?.revenue}</h1>
        <ul>
          {fetchResponse?.genres?.map((genre) => (
            <li key={genre.id}>- {genre.name}</li>
          ))}
        </ul>
        <h1>{fetchResponse?.origin_country?.[0]}</h1>
        <ul>
          {fetchResponse?.spoken_languages?.map((language) => (
            <li key={language.english_name}>+ {language.english_name}</li>
          ))}
        </ul>
      </Link>
    </>
  );
}
