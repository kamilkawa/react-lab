import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    // const [title, setTitle] = useState('Wall-E');
    // const movies = [
    //     {title: "Wall-E"},
    //     {title: "Pulp Fiction"},
    //     {title: "Matrix"},
    //     {title: "1670"},
    // ];
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);

    let message = '';
    if (title.length <5){
        message = "Title is too short.";
    }
    else if (title.length>=5 & title.length<10){
        message = "Title is super.";
    }
    else {
        message = "Title is too long.";
    }
    
    function addMovie(event) {
        event.preventDefault();
        setMovies([...movies, {title, year}]);
        setTitle('');
        setYear('');
    }

    return (
      <div className="container">
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
          </ul>
          <form onSubmit={addMovie}>
            <div>
                <label>Tytuł</label>
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
                    {title.length > 0 && <div>{message}</div>}
                </div>
                <div>
                    <label>Rok nagrania</label>
                    <input type="text" value={year} onChange={(event) => setYear(event.target.value)}/>
                </div>
                <button>Dodaj film</button>
            </form>
      </div>
  );
}

export default App;
