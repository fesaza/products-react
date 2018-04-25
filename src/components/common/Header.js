import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
    <div class="navbar-nav">
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
