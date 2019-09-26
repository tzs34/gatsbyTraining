import React from 'react'
import { graphql } from 'gatsby'
import GlobalStyle from '../components/styled/global-style'
import Layout from '../components/layout/layout'
import StyledHero from '../components/styled/styled-hero'
import Banner from '../components/banner'

export default ({ data }) => (
  <>
    <GlobalStyle />
    <Layout>
      <StyledHero img={data.heroImg.childImageSharp.fluid}>
        <Banner title="Explore the future today" />
      </StyledHero>
    </Layout>
  </>
)

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero-image.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
