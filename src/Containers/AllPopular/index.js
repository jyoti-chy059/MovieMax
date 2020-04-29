import React, { useState } from 'react';
import '../../index.css';

import Layout from 'Containers/Layout';
import AppPagination from 'Components/pagination';

import BasePopularMovieList from 'Containers/Base/Popular';

const AllPopular = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };
  return (
    <Layout>
      <div className="topContainer">
        <BasePopularMovieList
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

export default AllPopular;
