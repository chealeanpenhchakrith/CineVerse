import { useState } from "react";
import axios from "axios";
import useStore from "../store.js";

export default function SearchButton() {
  const { home, hideHome, updateResponse } = useStore();
  const [inputValue, SetInputValue] = useState("");
  function handleChange(event: any) {
    SetInputValue(event.target.value);
  }
  function handleSend() {
    if (inputValue.length !== 0) {
      hideHome();
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        console.log(response.data);
        updateResponse(response.data);
      });
  }
  return (
    <>
      <input
        className="text-white bg-[#1d2130] w-100 py-3 px-4 font-normal rounded-xs placeholder:text-[#51525f]"
        type="text"
        placeholder="Search for Movies, TV Series, Celebrities & More"
        onChange={handleChange}
      />
      <button onClick={handleSend} className="bg-[#f1c200] px-4 rounded-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search-icon lucide-search"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </button>
      <h1 className="text-white">{home}</h1>
    </>
  );
}
