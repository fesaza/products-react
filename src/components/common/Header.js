import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Toolbar } from 'react-md';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <ul className="navbar-nav mr-auto">
               <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
               <li className="nav-item"><Link className="nav-link" to='/products'>products</Link></li>
               <li className="nav-item"><Link className="nav-link" to='/clients'>clients</Link></li>
               <li className="nav-item"><Link className="nav-link" to='/contact'>contact</Link></li>
             </ul>
           </div>
         </div>
       </nav>
  );
}

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="Header">
    <Toolbar
    themed
    nav={<Nav />}
    />
  </header>
);

export default Header
