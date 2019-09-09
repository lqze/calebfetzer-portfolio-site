import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';


const Item = ({ image, alt }) => (
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={alt} />
);

Item.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Item;