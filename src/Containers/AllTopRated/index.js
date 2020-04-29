import React, { useState } from 'react';
import Layout from '../Layout';
import '../../index.css';
import BaseTopRatedMovieList from 'Containers/Base/TopRated';
import AppPagination from 'Components/pagination';

const AllTopRated = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };
  return (
    <Layout>
      <div className="container">
        <BaseTopRatedMovieList className="categoryPage" pageNo={currentPage} />
        <AppPagination
          currentPage={currentPage}
          noOfPages={10}
          onChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default AllTopRated;
