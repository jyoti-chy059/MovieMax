import React from 'react';
import '../../index.css';

import Layout from '../Layout';
import PopularMovieList from '../Popular';

const AllPopular = () => {
  return (
    <Layout>
      <PopularMovieList className="categoryPage" />
    </Layout>
  );
};

export default AllPopular;
