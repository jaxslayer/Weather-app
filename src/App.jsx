import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import { FaSearch } from "react-icons/fa";
function App() {
  const [inp, setinp] = useState("");
  const [city, setCity] = useState("Nizamabad");
  function clickHandler(e) {
    e.preventDefault();
    setCity(inp);
    setinp("");
  }
  return (
    <div className="h-screen">
      <header className="text-center bg-skyblue h-10 text-2xl font-semibold text-white">
        Weather app
      </header>
      <main className="flex justify-center items-center h-hn">
        <article className="h-96 w-96 bg-white shadow-2xl opacity-90">
          <form
            action=""
            className="w-full flex flex-row justify-center gap-1 mb-1"
          >
            <input
              type="text"
              className="outline-0 border-2 border-black rounded-2xl p-1"
              placeholder="Enter Your City"
              value={inp}
              onChange={(e) => setinp(e.target.value)}
            />
            <button className="h-9 w-9" onClick={clickHandler}>
              <FaSearch />
            </button>
          </form>
          <Main city={city} />
        </article>
      </main>
      <footer className="absolute bottom-0 text-center bg-skyblue w-full">
        copyright<sup>&#169;</sup> under salon prajapati
      </footer>
    </div>
  );
}

export default App;
