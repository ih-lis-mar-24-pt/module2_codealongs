import movieData from '../movie-data.json';
import { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState(movieData);

  const deleteMovie = movieId => {
    // returns every movie that does NOT have this movieId
    const filteredMovies = movies.filter(movie => movieId !== movie._id);

    setMovies(filteredMovies);
  };

  return (
    <>
      <h1>Movie List</h1>
      {movies.map(movieDetails => {
        return (
          <MovieCard
            key={movieDetails._id}
            movie={movieDetails}
            deleteHandler={deleteMovie}
          />
        );
      })}
    </>
  );
};

export default MovieList;
