import './ProductsMenu.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductsMenu extends Component {
 render() {
  return (
   <div id="MenuProducts" className="toggled">
            <div id="sidebar-MenuProducts">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <Link to="/products">
                        All
                    </Link>
                </li>
                {
                 this.props.categories.map(category => <li key={category}><Link to={`/products/${category}`}>{category}</Link></li>)
                }
            </ul>
        </div>
   </div>
  );
 }
}

export default ProductsMenu; 
