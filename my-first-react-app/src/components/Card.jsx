const Card = props => {
  return (
    <div>
      <p>Name:</p> {props.name.toUpperCase()}
      <p>Cohort:</p> {props.info.course} - {props.info.city}
      <p>Current Week:</p> {props.week}
      <p>First thing I learned was {props.stack[0]}</p>
    </div>
  );
};

export default Card;
