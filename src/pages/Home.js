// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
  <h1>
  Home Page
  </h1>    
     <MovieCard />
</main>
    </>
  );
};

export default Home;
