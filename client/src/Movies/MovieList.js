import React from 'react';
import { Link } from 'react-router-dom';



const MovieList = props => {

  const { movies } = props

  return (
    <div className="movie-list">
      {movies.map(movie => <MovieDetails key={movie.id} movie={movie} /> )}
    </div>
  );
}

function MovieDetails(props) {

  const { movie: 
    { 
      title,
      director,
      metascore,
      stars,
      id 
    } 
  } = props;


  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
      </Link>

      <div className="movie-director">
        Director: <em>{director}</em>
      </div>

      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>

      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
