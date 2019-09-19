import React from 'react'
import Header from '../examples/Header'
import { graphql } from 'gatsby'

const Example = props => {
  return <Header {...props} />
}

export default Example

/* This makes the data below available in the props above */
export const getMetaData = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
