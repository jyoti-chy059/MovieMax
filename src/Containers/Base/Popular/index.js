import React, { useEffect, useCallback, useState } from 'react';
import '../../../index.css';

import { transformMovieList } from 'Utils/DataTransform/movieList';
import HeaderPanel from 'Components/header';
import API from 'API';
import CardList from 'Components/cardList';

const BasePopularMovieList = ({
  className,
  pageNo,
  panelClassName,
  cardSize,
}) => {
  const [popularMovieList, setPopularMovieList] = useState(undefined);

  const fetchInitialData = useCallback(async () => {
    try {
      const { data } = await API.fetchPopulatMovieList(pageNo);
      setPopularMovieList(transformMovieList(data.results));
    } catch (err) {
      console.log(err);
    }
  }, [pageNo]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <div className={panelClassName}>
      <HeaderPanel text={`What's Popular`} />
      <div className={className}>
        {popularMovieList && (
          <CardList list={popularMovieList} cardSize={cardSize} />
        )}
      </div>
    </div>
  );
};

export default BasePopularMovieList;
