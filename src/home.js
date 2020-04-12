import React from 'react';
import './index.css';
import UpcomingMovieList from './Containers/Upcoming';
import PopularMovieList from './Containers/Popular';
import NowPlayingMovieList from './Containers/NowPlaying';
import TopRatedMovieList from './Containers/TopRated';
import NavBar from './Containers/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <NowPlayingMovieList />
      <UpcomingMovieList />
      <PopularMovieList />
      <TopRatedMovieList />
    </>
  );
};
export default Home;
