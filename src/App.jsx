import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gif from "./pages/Gif";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gif/:id" element={<Gif/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
