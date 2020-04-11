import React, { useEffect, useCallback, useState } from 'react';
import '../../index.css';
import { transformMovieList } from '../../Utils/DataTransform/movieList';
import HeaderPanel from '../../Components/header';
import API from '../../API';
import CardList from '../../Components/cardList';

const UpcomingMovieList = () => {
  const [upcomingMovieList, setUpcomingMovieList] = useState(undefined);

  const fetchInitialData = useCallback(async () => {
    try {
      const { data } = await API.fetchUpcomingMovieList();
      setUpcomingMovieList(transformMovieList(data.results));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <div className="panel">
      <HeaderPanel text={`Upcoming`} />
      <div className="cardContainer">
        {upcomingMovieList && <CardList list={upcomingMovieList} />}
      </div>
    </div>
  );
};

export default UpcomingMovieList;
