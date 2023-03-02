import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gif from "./pages/Gif";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search/:searchText" element={<Search/>}/>
        <Route path="/gif/:id" element={<Gif/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
