import React, { useState } from 'react';
import Layout from '../Layout';
import '../../index.css';
import BaseUpcomingMovieList from 'Containers/Base/Upcoming';
import AppPagination from 'Components/pagination';

const AllUpcoming = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };
  return (
    <Layout>
      <div className="conatiner">
        <BaseUpcomingMovieList className="categoryPage" pageNo={currentPage} />
        <AppPagination
          currentPage={currentPage}
          noOfPages={10}
          onChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default AllUpcoming;
