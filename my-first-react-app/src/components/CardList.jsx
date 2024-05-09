const CardList = props => {
  return (
    <div>
      <h2>List of cards</h2>
      {props.children}
      <p>-- End of list--</p>
    </div>
  );
};

export default CardList;
