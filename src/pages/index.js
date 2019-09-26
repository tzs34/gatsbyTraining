import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout/layout'
import StyledHero from '../components/styled/styled-hero'
import Banner from '../components/banner'
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  /* Font size generated for font Roboto
    using https://type-scale.com/
    at the scale of 1.250 - Major Third
  */
  --default-size: ${props => props.size || 0.8};
  --scale: ${props => props.scale || 1.25};
  --h1:  calc(var(---default-size) * var(--scale))em;
  --h2:  calc(var(--h1) * var(--scale))em;
  --h3:  calc(var(--h2) * var(--scale))em;
  --h4:  calc(var(--h3) * var(--scale))em;
  --h5: calc(var(--h4) * var(--scale))em;
  

  h1{
      font-size: --h5
    }
  h2{
      font-size: --h2;
    }
  h3{
      font-size: h3;
    }
  h4{
      font-size: --h4
    }
  h5{
      font-size: --h5;
    }  
  :root {
    --background-body-color: #2f3238;
    --body-color: #F7F7F7;
    --header-link-hover-color: white; 
    --text-shadow: #eeee00 0 0 1px, #ADD8E6 3px 3px 3px;
  }
        
  body {
      margin: 0;
      font-family: 'Roboto', cursive;
      font-size: var(---default-size)em; 
      font-size: 13px;
      font-weight: 400;
      color: var(--body-color);
      position: relative;
      width: 100%;
      height: 100vh;
      background: var(--background-body-color);
      overflow-x: hidden;
    }
`

export default () => (
  <>
    <GlobalStyle />
    <Layout>
      <StyledHero>
        <Banner />
      </StyledHero>
    </Layout>
  </>
)
