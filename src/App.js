import logo from './logo.svg';
import './App.css';

function App() {
    let title = 'Wall-E'
    function handleChange(e) {
        console.log(e.target.value)
    }

    return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>My favourite movie for today is {title}</h2>
          <input type='text' onChange={handleChange} />
      </div>
  );
}



export default App;
