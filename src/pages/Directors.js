import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Directors() {
  const [directors, setDirector] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the data to the console
        setDirector(data); // Set the movie state with the fetched data
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  // if (!directors) {
  //   return <h1>Loading...</h1>;
  // }
  console.log(directors)

  return (
    <>
      <header>
       <NavBar /> 
          </header>

      <main>
      <h1>Directors Page</h1>   
{directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
  </main>
    </>
  );
};

export default Directors;
