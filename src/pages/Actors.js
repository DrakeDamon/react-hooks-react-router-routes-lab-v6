import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the data to the console
        setActors(data); // Set the movie state with the fetched data
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  // if (!actors) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <>
      <header>
       <NavBar /> 
          </header>
          <h1>Actors Page</h1>    

      <main>
{actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
  </main>
    </>
  );
};
export default Actors;
