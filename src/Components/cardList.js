import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const CardList = ({ list }) => {
  return (
    <>
      {list.map((data) => (
        <Card data={data} />
      ))}
    </>
  );
};

CardList.propTypes = {
  list: PropTypes.array,
};

export default CardList;
