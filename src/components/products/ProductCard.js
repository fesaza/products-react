import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css'

const ProductCard = ({product}) => {
 return (
  <div className="card">
   <p>{product.name}</p>
  </div>
 );
}

ProductCard.propTypes = {
 product: PropTypes.object.isRequired
};

export default ProductCard;
