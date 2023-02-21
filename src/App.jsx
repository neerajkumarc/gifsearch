import { useState } from "react";

function App() {
  const [search, setSearch] = useState(null);
  const [gifs, setGifs] = useState([]);
  function fetchGifs(e) {
    e.preventDefault();
    const API_KEY = "1mwpV1pXzxX9PWodaVTxBGCXpAsda5up"
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((response) => response.json())
      .then((data) => setGifs(data.data));
  }
  return (
    <div className=" max-w-2xl mx-auto m-4">
      <h1
        className="text-red-500 text-4xl text-center font-bold "
      >
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
      <div className="grid grid-cols-2">
        {gifs.map((gif) => {
          return (
            <div key={gif.id} className="m-2">
              <img src={gif.images.original.url} loading="lazy" alt="gif" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
