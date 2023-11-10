import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import fileDownload from "js-file-download";
import PageNotFound from "./PageNotFound";
import { TailSpin } from "react-loader-spinner";

const Gif = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gif, setGif] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState();
  const API_KEY = "1mwpV1pXzxX9PWodaVTxBGCXpAsda5up";

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setGif(data.data);
        setLoading(false);
        setStatus(data.meta.status);
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
    <div>
      {status == 404 ? (
        <PageNotFound />
      ) : (
        <div>
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
            <div className="max-w-2xl mx-auto m-4 text-white flex flex-col items-center gap-4">
              <p className="text-bold text-2xl text-center">{gif.title}</p>
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
                <button
                  className="bg-red-500 px-4 p-2 w-36 font-bold rounded"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gif;
