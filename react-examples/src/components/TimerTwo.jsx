import { useState, useEffect } from 'react';

// the timer is increasing by two due to strict mode
// running the code twice

const TimerTwo = () => {
  const [count, setCount] = useState(0);

  // useEffect:
  // first argument is the function we want to run
  // second argument is the array of dependencies
  // if the array is empty, there is no dependencies
  // and the effect will only run once

  useEffect(() => {
    console.log('useEffect: Mounting');

    setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []); // empty array means it only runs when the component mounts

  return (
    <div>
      <h1>Timer Two</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default TimerTwo;
