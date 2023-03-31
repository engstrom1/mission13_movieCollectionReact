import React from 'react';
import MovieList from '../Movies';

function MovieCollection() {
  return (
    <>
      <div className="py-3" style={{ fontFamily: 'serif' }}>
        <h1 className="text-center">Movie Collection</h1>
      </div>
      <MovieList />
    </>
  );
}

export default MovieCollection;
