const Card = props => {
  return (
    <div>
      <p>Name:</p> {props.name}
      <p>Cohort:</p> {props.info.course} - {props.info.city}
      <p>Current Week:</p> {props.week}
    </div>
  );
};

export default Card;
