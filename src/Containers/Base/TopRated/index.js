import React, { useEffect, useCallback, useState } from 'react';
import '../../../index.css';

import { transformMovieList } from 'Utils/DataTransform/movieList';
import HeaderPanel from 'Components/header';
import API from 'API';
import CardList from 'Components/cardList';

const BaseTopRatedMovieList = ({ className, pageNo }) => {
  const [topRatedMovieList, setTopRatedMovieList] = useState(undefined);

  const fetchInitialData = useCallback(async () => {
    try {
      const { data } = await API.fetchTopRatedMovieList(pageNo);
      setTopRatedMovieList(transformMovieList(data.results));
    } catch (err) {
      console.log(err);
    }
  }, [pageNo]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <div className="panel">
      <HeaderPanel text={`Top Rated`} />
      <div className={className}>
        {topRatedMovieList && <CardList list={topRatedMovieList} />}
      </div>
    </div>
  );
};

export default BaseTopRatedMovieList;
