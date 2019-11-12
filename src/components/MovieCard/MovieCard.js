import React from 'react';
import { imageURL } from '../../constants';

import playIcon from '../../assets/svgs/play.svg';

import './MovieCard.module.css';

const MovieCard = props => (
  <div styleName="container">
    <img src={`${imageURL}${props.EventCode}.jpg`} alt={props.EventCode} styleName="thumbnail" />
    <p className="fontColorLight fontSize12">{props.EventTitle}</p>
    <img src={playIcon} alt="play" styleName="play-icon" />
  </div>
);

export default MovieCard;
