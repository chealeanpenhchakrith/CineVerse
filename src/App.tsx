import "./App.css";
import AppName from "./components/AppName";
import SearchButton from "./components/SearchButton";
import HeroSection from "./components/HeroSection";
import SubHeroSection from "./components/SubHeroSection";
import PopularMovies from "./components/PopularMovies";
import useStore from "./store";
import MovieCard from "./components/MovieCard";

function App() {
  const { home } = useStore();
  if (home) {
    return (
      <>
        <div className="bg-[#121620]">
          <div>
            <div className="flex pt-10 pl-17 items-center">
              <AppName />
              <div className="flex ml-105">
                <SearchButton />
              </div>
            </div>
            <div className="flex mt-10 ml-37">
              <MovieCard />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="bg-[#121620] min-h-screen">
          <div>
            <div className="flex pt-10 pl-18 items-center">
              <AppName />
              <div className="flex ml-105">
                <SearchButton />
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex mt-35 items-center">
            <div className="ml-40">
              <HeroSection />
            </div>
            <div className="ml-40">
              <SubHeroSection />
            </div>
          </div>

          {/* Popular Movies Section */}
          <div className="mt-20 px-6 md:px-12 lg:px-20 pb-12">
            <PopularMovies />
          </div>
        </div>
      </>
    );
  }
}

export default App;
