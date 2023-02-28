import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gif from "./pages/Gif";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gif/:id" element={<Gif/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
