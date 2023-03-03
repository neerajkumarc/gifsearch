import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import PageNotFound from "./PageNotFound"

const Home = () => {
  const { searchText } = useParams();
  const navigate = useNavigate();
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(null);
  function fetchGifs() {
    setLoading(true);
    const API_KEY = "1mwpV1pXzxX9PWodaVTxBGCXpAsda5up";
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchText}&limit=50&offset=0&rating=g&lang=en`
    )
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data);
        console.log(data.data);
      })
      .then(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchGifs();
  }, [searchText]);

  function handleClick(id) {
    navigate(`/gif/${id}`);
  }

  return (
    <div>
      <SearchBar/>
    {gifs.length == 0?<PageNotFound/>:<div> {loading ? (
        <p className="text-xl text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-3 grid-flow-dense max-w-2xl mx-auto p-4">
          {gifs.map((gif) => {
            return (
              <div
                key={gif.id}
                className="m-2 mx-auto"
                onClick={() => handleClick(gif.id)}
              >
                <img
                  className="w-40 h-40 cursor-pointer"
                  src={gif.images.preview_gif.url}
                  loading="lazy"
                  alt="gif"
                />
              </div>
            );
          })}
        </div>
      )}</div>}
    </div>
  );
};

export default Home;
