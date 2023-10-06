import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SearchResult = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    const judul = query;
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5dfa1f18e358b1ab5d3d90fb5d2fa7ec&query=${judul}`);
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMovies();
  }, [query]);

  return (
    <>
      <div className="d-flex justify-content-around  align-items-center mt-2">
        <h1 className="Hasil">Hasil Pencarian: {`${query}`}</h1>
        <Link to={"/"} className="btn btn-primary back">
          Kembali
        </Link>
      </div>
      <div className="row  row-cols-4">
        {results.map((movie) => (
          <div className="col">
            <Link to={`/${movie.id}`} className="card" key={movie.id}>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                <div className="card-body mv-title d-flex  justify-content-center  align-items-center">
                  <h5 className="card-title mv-body">{movie.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
