export default function SearchButton() {
  return (
    <>
      <input
        className="text-white bg-[#1d2130] w-100 py-3 px-4 font-normal rounded-xs placeholder:text-[#51525f]"
        type="text"
        name="input"
        placeholder="Search for Movies, TV Series, Celebrities & More"
      />
      <button className="bg-[#f1c200] px-4 rounded-xs">
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
    </>
  );
}
