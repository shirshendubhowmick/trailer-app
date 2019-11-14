import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import Main from './containers/Main/Main';
import MovieCardContainer from './containers/MovieCardContainer/MovieCardContainer';

import APICallHandler from './services/networkServices';

import { apiURL, apiMap } from './constants';

function App() {
  const languages = useRef(null);
  const moviesArray = useRef(null);
  const moviesObj = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    APICallHandler('GET', apiURL + apiMap.movieData).then((res) => {
      console.log(res);
      const [languageData, movieData] = res.data;
      languages.current = languageData;
      moviesArray.current = Object.values(movieData);
      moviesObj.current = movieData;
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Main isLoading={isLoading}>
        <MovieCardContainer
          movies={moviesArray.current ? moviesArray.current : []}
          moviesObj={moviesObj.current}
        />
      </Main>
    </div>
  );
}

export default App;
