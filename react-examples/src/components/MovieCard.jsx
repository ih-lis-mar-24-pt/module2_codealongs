const MovieCard = props => {
  return (
    <div>
      <h2>{props.movie.title}</h2>
      <p>Director: {props.movie.director}</p>
      <p>Rating: {props.movie.IMDBRating}</p>
      {
        // ternary
        props.movie.hasOscars ? <p>Won an Oscar!! 🏆</p> : <p>No Oscar 😔</p>
      }
      {
        // short circuiting
        props.movie.hasOscars && <p>This movie has an Oscar!!</p>
      }
      {!props.movie.hasOscars && <p>This movie does not have an Oscar!!</p>}
      <button onClick={() => props.deleteHandler(props.movie._id)}>
        Delete this movie!
      </button>
    </div>
  );
};

export default MovieCard;
