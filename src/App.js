import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [title, setTitle] = useState('Wall-E');
    const movies = [
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
    ];

    function handleChange(e) {
        setTitle(e.target.value);
    }

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
    

    return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
          </ul>
          <h2>My favourite movie for today is {title}</h2>
          {
            title.length > 0 && <div>{message}</div>
          }
          <input type='text' onChange={handleChange} />
          <button onClick={()=>{alert(title);}}>Show Movie title</button>
      </div>
  );
}



export default App;
