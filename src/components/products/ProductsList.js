import React, { Component } from 'react';
import ApiData from '../../api/ApiData';
import ProductCard from './ProductCard';

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
  const hidden = data.hiddenCount > 0 ? (
   <span>- hidden: <b>{data.hiddenCount}</b></span>
  ):(<span />);
  return (
   <div>
    <label>Showing <b>{data.totalCount}</b> products {hidden}</label>
    {
     data.items.map(product => <ProductCard key={product.id} product={product} />)
    }
   </div>
  );
 }
}

export default ProductsList;