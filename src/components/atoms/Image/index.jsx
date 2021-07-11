import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ className, alt, src }) => (
  <img className={className} alt={alt} src={src} />
);

Image.PropTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
};

export default Image;
