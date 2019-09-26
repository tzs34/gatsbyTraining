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
  background: ${props =>
    props.gradient ? 'linear-gradient(rgba(63, 208, 212, 0.7))' : 'none'};
  min-height: ${props => (props.gradient ? 'calc((100vh-60px)' : '50vh')};
`
