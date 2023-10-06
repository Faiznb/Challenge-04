import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Redirect ke halaman hasil pencarian dengan menggunakan React Router
    navigate(`/results/${query}`);
  };

  return (
    <div className="header d-flex justify-content-around align-item-center">
      <Link to={"/"} className="btn h-logo">
        Movielist
      </Link>
      <div className="input-group h-input my-3">
        <input className="form-control input-s" type="text" placeholder="Cari..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className="btn btn-outline-danger" onClick={handleSearch}>
          Cari
        </button>
      </div>
      <div className="d-flex ">
        <button className="btn btn-outline-danger mx-2 my-3">Login</button>
        <button className="btn btn-danger ms-4 my-3">Register</button>
      </div>
    </div>
  );
};

export default Header;
