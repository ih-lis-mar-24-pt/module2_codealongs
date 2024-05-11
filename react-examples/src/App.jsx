import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import MovieList from './components/MovieList';

function App() {
  const [mode, setMode] = useState('light');

  const switchMode = event => {
    console.log(event.target.value);

    setMode(event.target.value);
  };

  return (
    <div>
      <div className={`app ${mode}`}>
        <Counter />
        <MovieList />
      </div>
      <div className='mode'>
        <p>Select your preferred mode:</p>
        <select onChange={switchMode}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </div>
    </div>
  );
}

export default App;
