import React, { useMemo } from 'react';

import MovieCard from '../../components/MovieCard/MovieCard';
import useDeviceInfo from '../../Hooks/DeviceInfo/DeviceInfo';

import './MovieCardContainer.module.css';

const deviceRowElementMap = {
  desktop: 5,
  tablet: 3,
  landscape: 2,
  mobile: 1,
};

const getRowElementCount = (deviceInfo) => {
  let rowElementCount;

  Object.keys(deviceInfo).forEach((item) => {
    if (deviceInfo[item]) {
      rowElementCount = deviceRowElementMap[item];
    }
  });
  return rowElementCount;
};

const MovieCardContainer = (props) => {
  const deviceInfo = useDeviceInfo();
  const rowElementCount = useMemo(() => getRowElementCount(deviceInfo), [deviceInfo]);
  console.log(rowElementCount);

  return (
    <div styleName="container">
      {
        props.movies.map((movie, idx) => (
          <MovieCard {...movie} key={movie.EventCode} index={idx} />
        ))
      }
      {/* <p></p> */}
    </div>
  );
};

export default MovieCardContainer;
