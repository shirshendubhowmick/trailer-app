import React, { useMemo, useCallback, useState } from 'react';

import MovieCard from '../../components/MovieCard/MovieCard';
import useDeviceInfo from '../../Hooks/useDeviceInfo/useDeviceInfo';
import PreviewCard from '../../components/PreviewCard/PreviewCard';

import './MovieCardContainer.module.css';

const deviceRowElementMap = {
  desktop: 6,
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
  const [previewWidgetPosition, setPreviewWidgetPosition] = useState(null);
  const [clickedEventCode, setClickedEventCode] = useState(null);

  const movieCardOnClickHandler = useCallback((clickedIndex, EventCode) => {
    const remainder = clickedIndex % rowElementCount;
    const edgeIndex = remainder ? clickedIndex - (remainder - 1) :
      (clickedIndex - rowElementCount + 1);
    setPreviewWidgetPosition(edgeIndex);
    setClickedEventCode(EventCode);
  }, [rowElementCount]);
  console.log(previewWidgetPosition);

  // const finalMovies = rowElementCount ? finalMovies.slice(0, rowElementCount).push(<p>Test</p>)
  let finalMovies = props.movies;

  if (previewWidgetPosition) {
    const firstHalf = finalMovies.slice(0, previewWidgetPosition - 1);
    firstHalf.push({ type: 'preview', EventCode: clickedEventCode });
    const secondHalf = finalMovies.slice(previewWidgetPosition - 1);
    finalMovies = firstHalf.concat(secondHalf);
  }

  return (
    <div styleName="container">
      {
        finalMovies.map((item, idx) => (
          item.type && item.type === 'preview' ? (
            <PreviewCard key={`preview-${clickedEventCode}`} eventCode={clickedEventCode} />
          ) : (
            <MovieCard
              {...item}
              key={item.EventCode}
              index={previewWidgetPosition && (idx + 1 > previewWidgetPosition) ? idx : idx + 1}
              onClickHandler={movieCardOnClickHandler}
            />
          )
        ))
      }
      {/* <p></p> */}
    </div>
  );
};

export default MovieCardContainer;
