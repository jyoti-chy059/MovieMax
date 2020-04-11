import React, { useEffect, useCallback, useState } from 'react';
import '../../index.css';

import { transformMovieList } from '../../Utils/DataTransform/movieList';
import HeaderPanel from '../../Components/header';
import Card from '../../Components/card';
import API from '../../API';

const PopularMovieList = () => {
  const [popularMovieList, setPopularMovieList] = useState(undefined);

  const fetchInitialData = useCallback(async () => {
    try {
      const { data } = await API.fetchPopulatMovieList();
      setPopularMovieList(transformMovieList(data.results));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <div className="panel">
      <HeaderPanel text={`What's Popular`} />
      <div className="cardContainer">
        {popularMovieList && <Card list={popularMovieList} />}
      </div>
    </div>
  );
};

export default PopularMovieList;
