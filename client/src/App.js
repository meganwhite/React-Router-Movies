import React, { useState } from 'react';
import { Route } from "react-router-dom";

import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    let matches = savedList.filter(mov => mov.id === movie.id)
    return matches[0] ? null : setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>      
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:id" component={Movie} />
        <Route
          path ="/movies/:id"
          render={props => (
            <Movie
              {...props}
              addToSavedList={addToSavedList}
              list={savedList}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;



