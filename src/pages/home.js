import React, { useState } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { FcSearch } from 'react-icons/fc';

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="content__head">
        <input
          type="text"
          value={query}
          placeholder="Type then click the button!"
          onChange={(e) => setQuery(e.target.value)}
          style={{ flexGrow: 1, marginRight: '1rem' }}
          required
        />
        <button type="submit" className="button">
          <FcSearch />
        </button>
      </form>
      <Outlet />
    </>
  )
}

export default Home