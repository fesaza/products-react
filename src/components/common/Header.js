import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="Header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
  </header>
)

export default Header
