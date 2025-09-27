import "./App.css";
import AppName from "./AppName";
import SearchButton from "./SearchButton";

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
      </div>
    </>
  );
}

export default App;
