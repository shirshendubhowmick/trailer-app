import React from 'react';
import Loader from '../../components/Loader/Loader';

import './Main.module.css';


const Main = props => (
  <main styleName="container">
    {
      props.isLoading ? (
        <div styleName="loader-container">
          <Loader />
        </div>
      ) : props.children
    }
  </main>
  // {}
);

export default Main;
