import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie';

const App = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);


  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };


  return (
    <div>
      <SavedList list={savedList} />

      <Switch>
        <Route path="/movies/:movieId">
          <Movie addToSavedList={addToSavedList}/>
        </Route>

        <Route exact path="/">
          <MovieList movies={movies} />
        </Route>

        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  );
};

export default App;
