import React from 'react';
import './index.css';
import UpcomingMovieList from './Containers/Upcoming';
import PopularMovieList from './Containers/Popular';
import NowPlayingMovieList from './Containers/NowPlaying';
import TopRatedMovieList from './Containers/TopRated';
import Layout from './Containers/Layout';

const Home = () => {
  return (
    <Layout>
      <NowPlayingMovieList />
      <UpcomingMovieList />
      <PopularMovieList />
      <TopRatedMovieList />
    </Layout>
  );
};
export default Home;
