import React from 'react'
import './Navbar.css'

const Navbar = props => (
  <header className="Navbar">
    <nav className="nav-bar">
      <div className="nav-logo"><a href="">LOGO</a></div>
        <div className="nav-items">
          <ul>
            <li>Logo</li>
            <li><a href="">Create a Quiz</a></li>
            <li><a href="">Test Yourself</a></li>
          </ul>
        </div>
    </nav>
  </header>
)

export default Navbar