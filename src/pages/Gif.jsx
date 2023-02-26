import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import fileDownload from "js-file-download";

const Gif = () => {
  const { id } = useParams();
  console.log(id);
  const [gif, setGif] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "1mwpV1pXzxX9PWodaVTxBGCXpAsda5up";

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setGif(data.data);
        setLoading(false);
      });
  }, []);

  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };
  return (
    <>
      {loading ? (
        <p className="text-center text-2xl text-white">Loading...</p>
      ) : (
        <div className="max-w-2xl mx-auto m-4 text-white flex flex-col items-center gap-4">
          <img
            className="rounded-md w-96"
            src={gif.images.original.url}
            alt="gif"
          />
          <div className="flex gap-4 items-center">
            <button
              className="bg-green-500 px-4 p-2 w-36 font-bold rounded"
              onClick={() => {
                handleDownload(
                  gif.images.original.url,
                  `download${gif.id}.gif`
                );
              }}
            >
              Download
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gif;
