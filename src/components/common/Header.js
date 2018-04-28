import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Toolbar } from 'react-md';

const Nav = () => {
  return (
    <nav>
      <div>
        <ul className="ul-header">
          <li className="md-list-item"><Link className="links-header" to='/'>Home</Link></li>
          <li><Link className="links-header" to='/products'>products</Link></li>
          <li><Link className="links-header" to='/clients'>clients</Link></li>
          <li><Link className="links-header" to='/contact'>contact</Link></li>
        </ul>
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
