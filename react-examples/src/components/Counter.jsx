import { useState } from 'react';

const Counter = () => {
  // declaring a new state variable called count, where we'll store some information
  // also declaring the setCount function, we'll use it to update the state of count
  // we pass the value 0 in useState, it will be the initial value for count
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 500) {
      setCount(count => count + 100);
    }
  };

  return (
    <div className='card'>
      <button onClick={increaseCount}>count is {count}. Adding more!</button>
      <button onClick={() => setCount(count => count * 100)}>
        count is {count}. Multiplying!
      </button>
    </div>
  );
};

export default Counter;
