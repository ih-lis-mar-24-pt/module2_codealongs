import { useState } from 'react';

// this component causes an infinite re-render
// by setting a new setInterval every time the state is updated

const TimerOne = () => {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count => count + 1);
  }, 1000);

  return (
    <div>
      <h1>Timer One</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default TimerOne;
