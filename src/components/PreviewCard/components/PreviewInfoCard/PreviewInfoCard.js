import React from 'react';

import './PreviewInfoCard.module.css';

const getFormatedDate = (dateString) => {
  const [date, year] = dateString.split(', ');
  const dateArr = date.split(' ');
  dateArr[0] = dateArr[0].substring(0, 3).toLowerCase();
  return [dateArr.join(' '), year];
};

const PreviewInfoCard = (props) => {
  const [date, year] = getFormatedDate(props.movieData.DispReleaseDate);
  return (
    <div styleName="container">
      <div>
        <h3 className="fontColorLight mb8">{props.movieData.EventName}</h3>
        <p className="fontSize14 fontColorLight mb16">{props.movieData.EventLanguage}</p>
        <div>
          {
            props.movieData.EventGenre.split('|').map(genre => (
              <div key={genre} styleName="genre-tags">{genre}</div>
            ))
          }
        </div>
        <div className="inlineBlock mb16 mr24">
          <p className="fontColorWhite mb8">
            {props.movieData.wtsPerc}
            %
          </p>
          <p className="fontColorLight fontSize12">
            {props.movieData.wtsCount}
            &nbsp;votes
          </p>
        </div>
        <div className="inlineBlock mb16 mr24">
          <p className="fontColorWhite mb8 textCapitalize">
            {date}
          </p>
          <p className="fontColorLight fontSize12">
            {year}
          </p>
        </div>
        <p className="fontSize12 fontColorLight mb8">Some movie description</p>
        <p className="fontSize12 fontColorGreen">Read more</p>
      </div>
      <div className="flexApart fontSize12 pl24 pr24">
        <span className="fontColorGreen textAlignCenter">
          <span>
            WILL WATCH
          </span>
          <br />
          <span>
            (
            {props.movieData.wtsCount}
            )
          </span>
        </span>
        <span className="fontColorAmber textAlignCenter">
          <span>
            MAYBE
          </span>
          <br />
          <span>
            (
            {props.movieData.maybeCount}
            )
          </span>
        </span>
        <span className="fontColorRed textAlignCenter">
          <span>WON&apos;T WATCH</span>
          <br />
          <span>
            (
            {props.movieData.dwtsCount}
            )
          </span>
        </span>
      </div>
    </div>
  );
};

export default PreviewInfoCard;
