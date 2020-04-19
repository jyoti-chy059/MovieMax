import React from 'react';
import Layout from '../Layout';
import UpcomingMovieList from '../Upcoming';
import '../../index.css';

const AllUpcoming = () => {
  return (
    <Layout>
      <UpcomingMovieList className="categoryPage" />
    </Layout>
  );
};

export default AllUpcoming;
