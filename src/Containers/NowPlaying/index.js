import React from 'react';

import BaseNowPlayingMovieList from '../Base/NowPlaying';

const NowPlayingMovieList = ({ className, panelClassName }) => {
  return (
    <BaseNowPlayingMovieList
      pageNo="1"
      className={className}
      panelClassName={panelClassName}
      cardSize="s"
      />
  );
};

export default NowPlayingMovieList;
