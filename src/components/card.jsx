import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const movies = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=5dfa1f18e358b1ab5d3d90fb5d2fa7ec&language=en-US&page=1&include_adult=false&include_video=false");
      setData(movies.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.map((movie) => (
        <div className="col" key={movie.id}>
          <Link to={`/${movie.id}`} className="card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
            <div className="card-body mv-title d-flex  justify-content-center  align-items-center">
              <h5 className="card-title mv-body">{movie.title}</h5>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
