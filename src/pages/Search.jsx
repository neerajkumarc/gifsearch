import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { TailSpin } from "react-loader-spinner";

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
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchGifs();
  }, [searchText]);

  function handleClick(id) {
    navigate(`/gif/${id}`);
  }

  return (
    <div>
      <SearchBar />
      {gifs.length == 0 && <div className="flex items-center justify-center">
       <p>No GIFS found for {searchText}</p>
      </div>}
      {loading ? (
        <div className="flex items-center justify-center">
          <TailSpin
            height="80"
            width="80"
            color="#c87218"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 grid-flow-dense max-w-xl mx-auto p-4">
          {gifs.map((gif) => {
            return (
              <div
                key={gif.id}
                className="m-2 mx-auto hover:scale-110 transition-all duration-500"
                onClick={() => handleClick(gif.id)}
              >
                <img
                  className="w-40 p-1 h-40 cursor-pointer rounded-2xl"
                  src={gif.images.preview_gif.url}
                  loading="lazy"
                  alt="gif"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
