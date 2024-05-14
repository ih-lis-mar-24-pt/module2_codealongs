import movieData from '../movie-data.json';
import { useState } from 'react';
import MovieCard from './MovieCard';
import Summary from './Summary';

const mapMovieData = moviesArray => {
  return moviesArray.map(movie => {
    return {
      seen: false,
      ...movie
    };
  });
};

const MovieList = () => {
  const [movies, setMovies] = useState(mapMovieData(movieData));
  const [nrSeenMovies, setNrSeenMovies] = useState(0);

  const deleteMovie = movieId => {
    // returns every movie that does NOT have this movieId
    const filteredMovies = movies.filter(movie => movieId !== movie._id);

    setMovies(filteredMovies);
  };

  const toggleSeen = movieId => {
    const copyOfMovies = [...movies];

    copyOfMovies.forEach(movie => {
      if (movieId === movie._id) {
        movie.seen = !movie.seen;
      }
    });

    setMovies(copyOfMovies);

    const allSeenMovies = copyOfMovies.filter(movie => movie.seen == true);

    setNrSeenMovies(allSeenMovies.length);
  };

  return (
    <>
      <h1>Movie List</h1>
      <Summary nrOfSeenMovies={nrSeenMovies} />
      {movies.map(movieDetails => {
        return (
          <MovieCard
            key={movieDetails._id}
            movie={movieDetails}
            deleteHandler={deleteMovie}
            toggleHandler={toggleSeen}
          />
        );
      })}
    </>
  );
};

export default MovieList;
