import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ProductsMenu from './ProductsMenu';
import ProductsList from './ProductsList';
import ApiData from '../../api/ApiData';
import './ProductsPage.css';

class HomePage extends Component {
 constructor(props){
  super(props);
  this.state = {
   categories: ApiData.getCategories()
  }
 }
 render() {
  return (
   <div>
    <ProductsMenu categories={this.state.categories} />
    <div className="bodyProducts">
     <Switch>
       <Route path='/products/:category' component={ProductsList}/>
       <Route path='/products' component={ProductsList}/>
     </Switch>
    </div>
   </div>
  );
 }
}

export default HomePage;
