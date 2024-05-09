const Greeting = props => {
  console.log(props);
  const message = `Hello, ${props.firstName}!`;
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

export default Greeting;
