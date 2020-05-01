import React, { useEffect, useCallback, useState } from 'react';
import '../../../index.css';
import { transformMovieList } from 'Utils/DataTransform/movieList';
import HeaderPanel from 'Components/header';
import API from 'API';
import CardList from 'Components/cardList';

const BaseUpcomingMovieList = ({
  className,
  pageNo,
  panelClassName,
  cardSize,
}) => {
  const [upcomingMovieList, setUpcomingMovieList] = useState(undefined);

  const fetchInitialData = useCallback(async () => {
    try {
      const { data } = await API.fetchUpcomingMovieList(pageNo);
      setUpcomingMovieList(transformMovieList(data.results));
    } catch (err) {
      console.log(err);
    }
  }, [pageNo]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <div className={panelClassName}>
      <HeaderPanel text={`Upcoming`} />
      <div className={className}>
        {upcomingMovieList && (
          <CardList list={upcomingMovieList} cardSize={cardSize} />
        )}
      </div>
    </div>
  );
};

export default BaseUpcomingMovieList;
