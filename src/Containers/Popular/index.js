import React, { useEffect, useCallback, useState } from 'react';
import '../../index.css';

import { transformMovieList } from '../../Utils/DataTransform/movieList';
import HeaderPanel from '../../Components/header';
import API from '../../API';
import CardList from '../../Components/cardList';

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
        {popularMovieList && <CardList list={popularMovieList} />}
      </div>
    </div>
  );
};

export default PopularMovieList;
