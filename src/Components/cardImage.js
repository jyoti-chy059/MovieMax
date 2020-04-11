import React from 'react';
import PropTypes from 'prop-types';

import '../index.css';
import { imageBaseUrl } from '../Utils/constant';
import Image from './image';

const CardImage = ({ imageSrc }) => {
  return (
    <div className="imageContainer">
      <Image
        src={`${imageBaseUrl}${imageSrc}`}
        alt={'nothing'}
        className="image"
      />
    </div>
  );
};

CardImage.propTypes = {
  imageSrc: PropTypes.string,
};

export default CardImage;
