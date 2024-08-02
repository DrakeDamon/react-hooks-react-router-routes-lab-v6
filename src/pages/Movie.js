import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id: movieId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the data to the console
        setMovie(data); // Set the movie state with the fetched data
      })
      .catch((error) => console.error('Fetch error:', error));
  }, [movieId]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre, index) => (
  <span key={index}>
    {genre}
    <br />
  </span>
))}
      </main>
    </>
  );
}

export default Movie;
