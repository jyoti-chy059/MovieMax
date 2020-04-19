import React from 'react';
import Layout from '../Layout';
import TopRatedMovieList from '../TopRated';
import '../../index.css';

const AllTopRated = () => {
  return (
    <Layout>
      <TopRatedMovieList className="categoryPage" />
    </Layout>
  );
};

export default AllTopRated;
