import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import building from '../../images/building1.jpg'

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
`

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "building1.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "building3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Image = () => {
  const data = useStaticQuery(getImages)

  console.log(data)
  return (
    <Column>
      <div>
        <h3>HTML img tag</h3>
        <img src={building} width={300} height={300} />
      </div>
      <div>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </div>
      <div>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </div>
    </Column>
  )
}

export default Image
