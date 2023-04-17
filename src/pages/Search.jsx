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
  const [notFound , setNotFound] = useState(false)
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
        if(gifs.length==0){
          setNotFound(true)
        }
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
   {loading ? (
       <div className="flex items-center justify-center">
        <TailSpin
       height="80"
       width="80"
       color="#ff0000"
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
                className="m-2 mx-auto hover:scale-150 transition-all duration-500"
                onClick={() => handleClick(gif.id)}
              >
                <img
                  className="w-40 p-1 h-40 cursor-pointer"
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
