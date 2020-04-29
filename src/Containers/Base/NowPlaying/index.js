import React, { useEffect, useCallback, useState } from 'react';
import API from 'API';
import { transformMovieList } from 'Utils/DataTransform/movieList';
import HeaderPanel from 'Components/header';
import CardList from 'Components/cardList';

const BaseNowPlayingMovieList = ({ className, pageNo, panelClassName }) => {
  const [latestMovieList, setLatestMovieList] = useState(undefined);

  const fetchInitialData = useCallback(async () => {
    try {
      const { data } = await API.fetchPlayingMovieList(pageNo);
      setLatestMovieList(transformMovieList(data.results));
    } catch (err) {
      console.log(err);
    }
  }, [pageNo]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <div className={panelClassName}>
      <HeaderPanel text={`Now Playing`} />
      <div className={className}>
        {latestMovieList && <CardList list={latestMovieList} />}
      </div>
    </div>
  );
};

export default BaseNowPlayingMovieList;
