import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import Main from './containers/Main/Main';

import APICallHandler from './services/networkServices';

import { apiURL, apiMap } from './constants';
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  const languages = useRef(null);
  const movies = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    APICallHandler('GET', apiURL + apiMap.movieData).then((res) => {
      console.log(res);
      const [languageData, movieData] = res.data;
      languages.current = languageData;
      movies.current = movieData;
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Main isLoading={isLoading}>
        <MovieCard {...movies.current ? movies.current.ET00083045 : {}} />
      </Main>
    </div>
  );
}

export default App;
