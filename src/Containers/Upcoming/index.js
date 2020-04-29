import React from 'react';
import BaseUpcomingMovieList from 'Containers/Base/Upcoming';

const UpcomingMovieList = ({ className, panelClassName }) => {
  return (
    <BaseUpcomingMovieList
      pageNo="1"
      className={className}
      panelClassName={panelClassName}
    />
  );
};

export default UpcomingMovieList;
