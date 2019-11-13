import React from 'react';
import { imageURL } from '../../constants';

import './PreviewCard.module.css';


const PreviewCard = (props) => {
  return (
    <div styleName="container" style={{ backgroundImage: `url(${imageURL}/${props.eventCode}.jpg)` }}>
      <div styleName="overlay" />
      <div styleName="content">
        <iframe width="60%" height="316" src="https://www.youtube.com/embed/OPMRZZnFCxU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
      </div>
    </div>
  );
};

export default PreviewCard;
