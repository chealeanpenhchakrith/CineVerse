import "./App.css";
import AppName from "./components/AppName";
import SearchButton from "./components/SearchButton";
import HeroSection from "./components/HeroSection";
import SubHeroSection from "./components/SubHeroSection";
import useStore from "./store";
import SearchResult from "./components/SearchResult";
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
              <div className="flex ml-30">
                <SearchButton />
              </div>
            </div>
            <div className="mt-40 ml-37">
              <SearchResult />
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
        <div className="bg-[#121620] h-screen">
          <div>
            <div className="flex pt-10 pl-18 items-center">
              <AppName />
              <div className="flex ml-30">
                <SearchButton />
              </div>
            </div>
          </div>
          <div className="flex mt-35 items-center">
            <div className="ml-40">
              <HeroSection />
            </div>
            <div className="ml-40">
              <SubHeroSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
