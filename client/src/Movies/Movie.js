import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();

  const { movieId } = useParams();
 
  useEffect(() => {
       axios
        .get(`http://localhost:5000/api/movies/${movieId}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  }, [movieId]);
  

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  const removeMovie = () => {

  }


  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
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
      <div onClick={ saveMovie } className="save-button">Add to saved movies</div>
      <button>Remove from saved movies</button>
    </div>
  );
}

export default Movie;
