import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const CardList = ({ list, cardSize }) => {
  return (
    <>
      {list.map((data) => (
        <Card data={data} cardSize={cardSize} />
      ))}
    </>
  );
};

CardList.propTypes = {
  list: PropTypes.array,
};

export default CardList;
