import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './containers/Main/Main';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Header />
      <Main isLoading={isLoading} />
    </div>
  );
}

export default App;
