import React, { useEffect, useCallback, useState } from 'react';
import '../../index.css';
import { transformMovieList } from '../../Utils/DataTransform/movieList';
import HeaderPanel from '../../Components/header';
import Card from '../../Components/card';
import API from '../../API';

const NowPlayingMovieList = () => {
  const [latestMovieList, setLatestMovieList] = useState(undefined);

  const fetchInitialData = useCallback(async () => {
    try {
      const { data } = await API.fetchPlayingMovieList();
      setLatestMovieList(transformMovieList(data.results));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <div className="panel">
      <HeaderPanel text={`Now Playing`} />
      <div className="cardContainer">
        {latestMovieList && <Card list={latestMovieList} />}
      </div>
    </div>
  );
};

export default NowPlayingMovieList;
