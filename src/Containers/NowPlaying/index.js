import React, { useEffect, useCallback, useState } from 'react';
import '../../index.css';
import { transformMovieList } from '../../Utils/DataTransform/movieList';
import HeaderPanel from '../../Components/header';
import API from '../../API';
import CardList from '../../Components/cardList';

const NowPlayingMovieList = ({ className }) => {
  const [latestMovieList, setLatestMovieList] = useState(undefined);

  const fetchInitialData = useCallback(async () => {
    try {
      const { data } = await API.fetchPlayingMovieList(1);
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
      <div className={className}>
        {latestMovieList && <CardList list={latestMovieList} />}
      </div>
    </div>
  );
};

export default NowPlayingMovieList;
