import { useState } from 'react';
import data from './MovieData.json';

const movies = data.MovieData;

function MovieList() {
  const [movieList, setMovieList] = useState(movies);

  const addMovie = () => {
    setMovieList([
      ...movies,
      {
        Title: 'The Godfather',
        Year: 1972,
        Rating: '9.2',
        Director: 'Francis Ford Coppola',
        Category: 'Crime, Drama',
        Edited: 'Yes',
      },
    ]);
  };
  return (
    <>
      <table className="table table-hover">
        <thead style={{ fontFamily: 'serif' }}>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Rating</th>
            <th>Director</th>
            <th>Category</th>
            <th>Edited?</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((movie) => (
            <tr key={movie.Title}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Rating}</td>
              <td>{movie.Director}</td>
              <td>{movie.Category}</td>
              <td>{movie.Edited ? movie.Edited : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-outline"
          style={{
            backgroundColor: '#73dec1',
            border: '1px solid black',
            fontFamily: 'serif',
          }}
          type="button"
          onClick={addMovie}
        >
          <b> Add Movie</b>
        </button>
      </div>
    </>
  );
}

export default MovieList;
