import React, { useEffect, useCallback, useState } from 'react';
import '../../index.css';

import { transformMovieList } from '../../Utils/DataTransform/movieList';
import HeaderPanel from '../../Components/header';
import Card from '../../Components/card';
import API from '../../API';

const TopRatedMovieList = () => {
  const [topRatedMovieList, setTopRatedMovieList] = useState(undefined);

  const fetchInitialData = useCallback(async () => {
    try {
      const { data } = await API.fetchTopRatedMovieList();
      setTopRatedMovieList(transformMovieList(data.results));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <div className="panel">
      <HeaderPanel text={`Top Rated`} />
      <div className="cardContainer">
        {topRatedMovieList && <Card list={topRatedMovieList} />}
      </div>
    </div>
  );
};

export default TopRatedMovieList;
