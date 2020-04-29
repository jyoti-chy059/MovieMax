import React from 'react';
import PropTypes from 'prop-types';
import CardImage from './cardImage';
import CardData from './cardData';

const Card = ({ data }) => {
  return (
    <div className="card" key={data.name}>
      <CardImage imageSrc={data.image} />
      <CardData name={data.name} date={data.date} />
    </div>
  );
};

Card.propTypes = {
  list: PropTypes.array,
};

export default Card;
