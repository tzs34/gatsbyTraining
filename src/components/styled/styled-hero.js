import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledHero = ({ img, className, children, gradient }) => {
  return (
    <BackgroundImage className={className} fluid={img} gradient={gradient}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  background-repeat: no-repeat;
  min-height: 85vh;
  min-width: calc(100vw - 50px);
`
