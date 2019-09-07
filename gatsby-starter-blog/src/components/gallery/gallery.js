import React from 'react';
import PropTypes from 'prop-types';
import Item from './item/item';

function ItemComponent(props) {
  return (
    props.items.map((item, i) => (
      <Item {...item} key={i} />
    ))
  )
}

const Gallery = ({ items }) => (
  <ItemComponent items={items} />
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;