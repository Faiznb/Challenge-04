import React from "react";
import Card from "../components/card";
import Slider from "../components/slider";
import MovieSearch from "../components/header";

const Home = () => {
  return (
    <>
      <MovieSearch />
      <Slider />
      <div className="home container">
        <div className="d-flex  justify-content-between  align-items-center">
          <h1>Popular Movie</h1>
          <h3 className="see">See All Movie</h3>
        </div>
        <div className="row  row-cols-4">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
