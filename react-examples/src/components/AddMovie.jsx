import { useState } from 'react';

const AddMovie = props => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [IMDBRating, setIMDBRating] = useState(0);
  const [hasOscars, setHasOscars] = useState(false);

  const handleTitle = event => {
    setTitle(event.target.value);
  };

  const handleDirector = event => {
    setDirector(event.target.value);
  };

  const handleIMDBRating = event => {
    setIMDBRating(event.target.value);
  };

  const handleHasOscars = event => {
    // Here it's checked because it is a checkbox!
    setHasOscars(event.target.checked);
  };

  const handleSubmit = event => {
    // stops the page from refreshing when the form is submitted
    event.preventDefault();

    const _id = Math.random() * title.length;

    const newMovie = {
      title,
      director,
      IMDBRating,
      hasOscars,
      _id
    };

    props.addMovieHandler(newMovie);

    setTitle('');
    setDirector('');
    setIMDBRating(0);
    setHasOscars(false);
  };

  return (
    <div>
      <h2>Add a new movie</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='text' name='title' value={title} onChange={handleTitle} />

        <label>Director</label>
        <input
          type='text'
          name='director'
          value={director}
          onChange={handleDirector}
        />

        <label>IMDB Rating</label>
        <input
          type='number'
          name='IMDBRating'
          value={IMDBRating}
          onChange={handleIMDBRating}
        />

        <label>Won Oscar</label>
        <input
          type='checkbox'
          name='hasOscars'
          checked={hasOscars}
          onChange={handleHasOscars}
        />

        <button type='submit'>Add a new movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
