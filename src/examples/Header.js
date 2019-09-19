/* 
REMEBER
ONLY USE PAGE QUERY ON PAGES

*/

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Header = props => {
  const {
    data: {
      site: {
        siteMetadata: { author, title },
      },
    },
  } = props
  return (
    <>
      <div>{title}</div>
      <div>{author}</div>
    </>
  )
}

export default Header
