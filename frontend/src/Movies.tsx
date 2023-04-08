import { useState, useEffect } from 'react';
import { Movie } from './types/movie';

function MovieList() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://localhost:4000/movie');
      const data = await response.json();
      setMovieList(data);
    };
    fetchMovies();
  }, []);

  const filteredData = movieList
    .filter((m) => m.edited === 'Yes')
    .sort((a, b) => a.title.localeCompare(b.title));

  // const addMovie = () => {
  //   setMovieList([
  //     ...movies,
  //     {
  //       Title: 'The Godfather',
  //       Year: 1972,
  //       Rating: '9.2',
  //       Director: 'Francis Ford Coppola',
  //       Category: 'Crime, Drama',
  //       Edited: 'Yes',
  //     },
  //   ]);
  // };
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
          {filteredData.map((m) => (
            <tr key={m.title}>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.rating}</td>
              <td>{m.director}</td>
              <td>{m.category}</td>
              <td>{m.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        {/* <button
          className="btn btn-outline"
          style={{
            backgroundColor: '#73dec1',
            border: '1px solid black',
            fontFamily: 'serif',
          }}
          type="button"
          // onClick={addMovie}
        >
          <b> Add Movie</b>
        </button> */}
      </div>
    </>
  );
}

export default MovieList;
