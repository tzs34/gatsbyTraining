import { graphql } from 'gatsby'

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
