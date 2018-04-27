import './ProductsMenu.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductsMenu extends Component {
 renderCard(category){
  return (
   <li className="menuItem" key={category}>
    <Link to={`/products/${category}`}>
     <div><div className="menuLabel">{category}</div></div>
    </Link>
  </li>
 );
 }
 render() {
  return (
   <span className="menu">
     <div>
      <ul>
          <li className="menuItem">
              <Link to="/products">
              <div><div className="menuLabel">All</div></div>
              </Link>
          </li>
          {
           this.props.categories.map(this.renderCard)
          }
      </ul>
    </div>
   </span>
  );
 }
}

export default ProductsMenu; 
