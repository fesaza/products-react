import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css'

const ProductCard = ({product}) => {
 return (
  <div className="card">
   <h4>{product.name}</h4>
   <div>{product.categories.join(', ')} - {product.brand}</div>
   <div className="row">
    <img className="col-md-2" src={product.photo} alt={product.name} height="100%" />
    <div className="col-md-9">
     <div>{product.description}</div>
     <br />
     <div><span className="labels">Price:</span> {product.price}</div>
     <div><span className="labels">Stock:</span> {product.stock}</div>
    </div>
   </div>
  </div>
 );
}

ProductCard.propTypes = {
 product: PropTypes.object.isRequired
};

export default ProductCard;
