import { useState, useEffect } from 'react';

const TimerFour = () => {
  const [count, setCount] = useState(0);
  const [isParty, setIsParty] = useState(false);

  // useEffect:
  // first argument is the function we want to run
  // second argument is the array of dependencies
  // if the array is empty, there is no dependencies
  // and the effect will only run once

  useEffect(() => {
    console.log('useEffect: Mounting');

    console.log('Before');
    const id = setInterval(() => {
      console.log('Adding one');
      setCount(count => count + 1);
    }, 1000);
    console.log('After');

    // clean up when unmounting
    // return () => {
    //   console.log('Clean up: Unmounting');
    //   clearInterval(id);
    // };
  }, []); // empty array means it only runs when the component mounts

  useEffect(() => {
    console.log('useEffect: Updating');
    // change the title of the page to the value of count
    document.title = count;

    if (count > 10) {
      setIsParty(true);
    }

    if (isParty) {
      document.title = 'PARTY';
    }
  }, [count, isParty]); // this will run every time the variable count is updated

  return (
    <div>
      <h1>Timer Four</h1>
      <h2>{count}</h2>
      {isParty && <p>PARTYYYYY</p>}
    </div>
  );
};

export default TimerFour;
