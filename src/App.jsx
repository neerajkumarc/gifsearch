import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gif from "./pages/Gif";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-4xl text-center font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-800 ">
        GIF NOT JIF
      </h1>
      <p className="text-center m-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-100 ">Discover endless fun with amazing animated gif collection!</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchText" element={<Search />} />
        <Route path="/gif/:id" element={<Gif />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
