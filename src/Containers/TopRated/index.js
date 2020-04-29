import React from 'react';

import BaseTopRatedMovieList from 'Containers/Base/TopRated';

const TopRatedMovieList = ({ className, panelClassName }) => {
  return (
    <BaseTopRatedMovieList
      pageNo="1"
      className={className}
      panelClassName={panelClassName}
    />
  );
};

export default TopRatedMovieList;
