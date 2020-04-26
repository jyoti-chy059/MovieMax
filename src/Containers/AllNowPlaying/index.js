import React from 'react';
import '../../index.css';

import Layout from '../Layout';
import NowPlayingMovieList from '../NowPlaying';
import AppPagination from '../../Components/pagination';

const AllNowPlaying = () => {
  const handlePageChange = () => {
    console.log('handle page change');
  };
  return (
    <Layout>
      <div>
        <NowPlayingMovieList className="categoryPage" />
        <AppPagination
          activePage={1}
          countPerPage={10}
          totalItemsCount={100}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default AllNowPlaying;
