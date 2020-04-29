import React, { useState } from 'react';
import '../../index.css';
import Layout from 'Containers/Layout';
import AppPagination from 'Components/pagination';
import BaseNowPlayingMovieList from 'Containers/Base/NowPlaying';

const AllNowPlaying = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };
  return (
    <Layout>
      <div className="topContainer">
        <BaseNowPlayingMovieList
          className="categoryPage"
          pageNo={currentPage}
          panelClassName="panel"
        />
        <AppPagination
          currentPage={currentPage}
          noOfPages={10}
          onChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default AllNowPlaying;
