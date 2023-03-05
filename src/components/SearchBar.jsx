import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [search, setSearch] = useState(null);
    const navigate = useNavigate()
    const fetchGifs = (e)=>{
        e.preventDefault()
        navigate(`/search/${search}`)
    }
  return (
    <div className=" max-w-2xl mx-auto m-4 flex flex-col justify-center">
   
    <form onSubmit={fetchGifs} className="text-center">
      <input
        type="text"
        placeholder="Search gifs.."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="rounded p-4 m-4 w-[80%] text-black"
      />
    </form>
    </div>
  )
}

export default SearchBar
