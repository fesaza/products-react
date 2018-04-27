import React, { Component } from 'react';
import ApiData from '../../api/ApiData';
import ProductCard from './ProductCard';
import './ProductList.css';

class ProductsList extends Component {

 constructor(props){
  super(props);
  const category = this.props.match.params.category;
  this.state = {
   data: ApiData.getByCategory(category)
  };
 }

 static getDerivedStateFromProps(nextProps, prevState) {
  const category = nextProps.match.params.category;
  return {data: ApiData.getByCategory(category)};
 }

 render() {
  const data = this.state.data;
  return (
   <div>
    <h3 className="Title-Products">Showing {data.totalCount} hidden {data.hiddenCount}</h3>
    {
     data.items.map(product => <ProductCard key={product.id} product={product} />)
    }
   </div>
  );
 }
}

export default ProductsList;