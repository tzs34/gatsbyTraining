import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="//">To Home</Link>
      </li>
      <li>
        <Link to="/blog/">To Blog</Link>
      </li>
      <li>
        <Link to="/product/">To Product</Link>
      </li>
      <li>
        <Link to="/gallery/">To Gallery</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar
