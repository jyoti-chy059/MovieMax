import React, { useState } from 'react';
import '../../index.css';

import Layout from '../Layout';
import AppPagination from 'Components/pagination';

import BasePopularMovieList from 'Containers/Base/Popular';

const AllPopular = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };
  return (
    <Layout>
      <BasePopularMovieList className="categoryPage" pageNo={currentPage} />
      <AppPagination
        currentPage={currentPage}
        noOfPages={10}
        onChange={handlePageChange}
      />
    </Layout>
  );
};

export default AllPopular;
