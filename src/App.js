import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";

function App() {
    const [movies, setMovies] = useState([{title: "Well-E"}, {title: "2012"}]);
    return (
      <div className="container">
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
          </ul>
          {/* This is the way to add a movie string into existing movies list */}
          <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>
      </div>
  );
}

export default App;
