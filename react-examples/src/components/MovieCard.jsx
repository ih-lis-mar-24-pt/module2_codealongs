// import { useState } from 'react';

const MovieCard = props => {
  // const [seenMovie, setSeenMovie] = useState(false);

  // const toggleMovie = () => {
  //   setSeenMovie(seenStatus => !seenStatus);
  // };

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
      <button onClick={() => props.toggleHandler(props.movie._id)}>
        {props.movie.seen ? 'Mark as not seen' : 'Mark as seen'}
      </button>
    </div>
  );
};

export default MovieCard;
