import React from 'react';
import '../../index.css';

import Layout from '../Layout';
import NowPlayingMovieList from '../NowPlaying';

const AllNowPlaying = () => {
  return (
    <Layout>
      <NowPlayingMovieList className="categoryPage" />
    </Layout>
  );
};

export default AllNowPlaying;
