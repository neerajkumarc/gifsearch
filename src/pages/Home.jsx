import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    {   const navigate = useNavigate()
        const [search, setSearch] = useState(null);
        const [gifs, setGifs] = useState([]);
        const [loading, setLoading] = useState(null);
        function fetchGifs(e){
          e.preventDefault();
          setLoading(true);
          const API_KEY = "1mwpV1pXzxX9PWodaVTxBGCXpAsda5up";
          fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=50&offset=0&rating=g&lang=en`
          )
            .then((response) => response.json())
            .then((data) => {
              setGifs(data.data);
            })
            .then(() => {
              setLoading(false);
            });
        }
        function handleClick(id){
          navigate(`/gif/${id}`)
        }
        return (
          <div className=" max-w-2xl mx-auto m-4 flex flex-col justify-center">
            <h1 className="text-red-500 text-4xl text-center font-bold ">
              GIF NOT JIF
            </h1>
            <form onSubmit={fetchGifs}>
              <input
                type="text"
                placeholder="Search gifs.."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="rounded p-4 m-4 w-full"
              />
            </form>
            {loading ? (
              <p className="text-xl text-white text-center">Loading...</p>
            ) : (
              <div className="grid grid-cols-3 grid-flow-dense">
                {gifs.map((gif) => {
                  return (
                    <div key={gif.id} className="m-2 mx-auto" onClick={()=>handleClick(gif.id)}>
                      <img className="w-40 h-40 cursor-pointer" src={gif.images.preview_gif.url} loading="lazy" alt="gif" />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      }
  
}

export default Home
