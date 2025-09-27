import "./App.css";
import AppName from "./components/AppName";
import SearchButton from "./components/SearchButton";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <div className="bg-[#121620] h-screen">
        <div>
          <div className="flex pt-10 pl-10 items-center">
            <AppName />
            <div className="flex ml-30">
              <SearchButton />
            </div>
          </div>
        </div>
        <div className="mt-35 ml-40">
          <HeroSection />
        </div>
      </div>
    </>
  );
}

export default App;
