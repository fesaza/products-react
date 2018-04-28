import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductsMenu extends Component {
 renderCard(category){
  return (
   <li className="md-list-item" key={category.name}>
    <Link to={`/products/${category.name}`}>
      <div className="menuLabel">
       <i className="material-icons icon">{category.icon}</i> {category.name}
      </div>
    </Link>
  </li>
 );
 }
 render() {
  return (
   <div className="menu">
     <div>
      <div className="Title-Categories">Categories</div>
      <ul className="menu-ul">
          <li className="md-list-item">
              <Link to="/products">
              <div className="menuLabel"><i className="material-icons icon">view_list</i> All</div>
              </Link>
          </li>
          {
           this.props.categories.map(this.renderCard)
          }
      </ul>
    </div>
   </div>
  );
 }
}

export default ProductsMenu; 
