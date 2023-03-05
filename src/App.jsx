import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gif from "./pages/Gif";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-red-500 text-4xl text-center font-bold mt-4">
        GIF NOT JIF
      </h1>
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
