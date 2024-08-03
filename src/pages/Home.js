import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";



function Home() {

  const[movies, setMovies]= useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
  <h1>
  Home Page
  </h1> 
  {movies.map((movie) => {
    return <MovieCard key={movie.id} id={movie.id} title={movie.title} />
 })} 
</main>
    </>
  );
};

export default Home;
