import React, { Component } from 'react';
import ApiData from '../../api/ApiData';

class ProductsList extends Component {

 constructor(props){
  super(props);
  const category = this.props.match.params.category;
  this.state = {
   products: ApiData.getByCategory(category)
  };
 }

 static getDerivedStateFromProps(nextProps, prevState) {
  const category = nextProps.match.params.category;
  return {products: ApiData.getByCategory(category)};
 }

 render() {
  return (
   <div>
    <h1>Product lists {this.props.match.params.category}</h1>
    {
     this.state.products.map(product => <p key={product.id}>{product.name}</p>)
    }
   </div>
  );
 }
}

export default ProductsList;