export default function MoviesList(props) { 
    return <div>
        <h2>Titles</h2>
          <ul>
            {props.movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
          </ul>  
    </div>
}