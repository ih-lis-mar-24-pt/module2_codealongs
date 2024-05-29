import './App.css';
// import Counter from './components/Counter';
import { useState } from 'react';
// import TimerOne from './components/TimerOne';
// import MovieList from './components/MovieList';
// import TimerTwo from './components/TimerTwo';
// import TimerThree from './components/TimerThree';
import TimerFour from './components/TimerFour';

function App() {
  const [mode, setMode] = useState('light');
  const [isVisible, setIsVisible] = useState(true);

  const switchMode = event => {
    console.log(event.target.value);

    setMode(event.target.value);
  };

  return (
    <div>
      <div className={`app ${mode}`}>
        {/* <Counter />
        <MovieList /> */}

        {/* <TimerOne /> */}
        {/* <TimerTwo /> */}
        {/* <TimerThree /> */}
        <button onClick={() => setIsVisible(prev => !prev)}>Toggle</button>

        {isVisible && <TimerFour />}
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
