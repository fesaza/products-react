import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Grid, Cell } from 'react-md';

const ProductCard = ({product}) => {
 var subtitle = `${product.categories.join(', ')} - ${product.brand}`;
 return (
  <Card  className="md-block-centered card">
   <CardTitle title={product.name} subtitle={subtitle} />
   <CardText>
    <Grid>
     <Cell size={2}>
     <div>
      <img src={product.photo} alt={product.name} width="100%" height="100%" />
      </div>
     </Cell>
      <Cell size={9}>
       <div>
        <div>{product.description}</div>
        <br />
        <div><b>Price:</b> {product.price}</div>
        <div><b>Stock:</b> {product.stock}</div>
       </div>
      </Cell>
     </Grid>
   </CardText>
  </Card>
 );
}

ProductCard.propTypes = {
 product: PropTypes.object.isRequired
};

export default ProductCard;
