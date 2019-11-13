import React from 'react';
import { imageURL } from '../../constants';

import playIcon from '../../assets/svgs/play.svg';

import './MovieCard.module.css';

const MovieCard = props => (
  <div styleName="container">
    <div styleName="image-container" onClick={() => props.onClickHandler(props.index, props.EventCode)}>
      <img src={`${imageURL}${props.EventCode}.jpg`} alt={props.EventCode} styleName="thumbnail" />
      <img src={playIcon} alt="play" styleName="play-icon" />
    </div>
    <p styleName="movie-name">{props.EventTitle}</p>
  </div>
);

export default MovieCard;
