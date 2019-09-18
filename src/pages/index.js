import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div>
    <h1>Home Page</h1>
    <div>
      <Link to="/product/"> Go to product </Link>
    </div>
    <div>
      <Link to="/blog/"> Go to blog </Link>
    </div>
  </div>
)
