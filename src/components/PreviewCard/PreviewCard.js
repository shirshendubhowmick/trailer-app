import React from 'react';
import { imageURL } from '../../constants';
import PreviewInfoCard from './components/PreviewInfoCard/PreviewInfoCard';
import { getYoutubeVideoID } from '../../utils';

import './PreviewCard.module.css';


const PreviewCard = props => (
  <div styleName="container" style={{ backgroundImage: `url(${imageURL}/${props.eventCode}.jpg)` }}>
    <div styleName="overlay" />
    <div styleName="content">
      <iframe width="50%" height="316" src={`https://www.youtube.com/embed/${getYoutubeVideoID(props.movieData.TrailerURL)}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
      <PreviewInfoCard movieData={props.movieData} />
    </div>
  </div>
);

export default PreviewCard;
