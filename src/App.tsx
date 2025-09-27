import "./App.css";
import AppName from "./components/AppName";
import SearchButton from "./components/SearchButton";
import HeroSection from "./components/HeroSection";
import SubHeroSection from "./components/SubHeroSection";

function App() {
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

export default App;
