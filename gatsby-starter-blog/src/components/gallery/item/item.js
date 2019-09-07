import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { ImageContainer } from './item.css'

const Item = ({ image }) => (
  <Img fluid={image ? image.childImageSharp.fluid : {}} alt={'temp'} />
);

Item.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Item;