import useStore from "../store.js";

export default function SearchResult() {
  const { fetchResponse } = useStore();
  return (
    <>
      <h1 className="text-white text-xl font-normal">
        Found {fetchResponse.total_results} results.
      </h1>
    </>
  );
}
