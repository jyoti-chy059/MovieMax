import React from 'react';
import BasePopularMovieList from 'Containers/Base/Popular';

const PopularMovieList = ({ className, panelClassName }) => {
  return (
    <BasePopularMovieList
      pageNo="1"
      className={className}
      panelClassName={panelClassName}
      cardSize="s"
    />
  );
};

export default PopularMovieList;
