import './ProductsMenu.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductsMenu extends Component {
 renderCard(category){
  return (
   <li className="menuItem" key={category.name}>
    <Link to={`/products/${category.name}`}>
     <div>
      <div className="menuLabel">
       <i className="material-icons icon">{category.icon}</i> {category.name}
      </div>
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
          <li className="menuItem">
              <Link to="/products">
              <div><div className="menuLabel"><i className="material-icons icon">view_list</i> All</div></div>
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
