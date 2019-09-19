import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
const getMetaData = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      siteMetadata: { author, title },
    },
  } = useStaticQuery(getMetaData)

  return (
    <>
      <div>{title}</div>
      <div>{author}</div>
    </>
  )
}

export default Header
