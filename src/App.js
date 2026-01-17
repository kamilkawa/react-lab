import './App.css';
import { useState } from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleMovieSubmit(movie) {
    setMovies(prev => [...prev, movie]); // dodaj film
    setShowForm(false);                  // schowaj formularz
  }

  return (
    <div>
      <h1>My favourite movies to watch</h1>

      <MoviesList movies={movies} />

      <button onClick={() => setShowForm(prev => !prev)}>
        {showForm ? "Hide adding movie form" : "Add a movie"}
      </button>

      {showForm && (
        <MovieForm onMovieSubmit={handleMovieSubmit} />
      )}
    </div>
  );
}

export default App;
