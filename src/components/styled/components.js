import styled from 'styled-components'

const screenSize = {
  mobile: '375',
  tablet: '480px',
  desktop: '768px',
}

export const device = {
  mobile: `(min-width: ${screenSize.mobile})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  desktop: `(min-width: ${screenSize.desktop})`,
}

export const Card = styled.div`
  width: 20%;
  min-width: 200px;
  margin: 5px 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);

  & button {
    position: absolute;
    padding: 0.8rem;
    border: none;
    outline: none;
    background: transparent;
    z-index: 100;
  }
`

export const CardImg = styled.div`
  border-radius: 10px;
  flex-wrap: wrap;
  margin: 0.5rem;
`

export const CardText = styled.div`
  padding: 5px;
  text-align: center;
`
export const GridColumn = styled.div`
  --width: ${props => props.width};
  order: ${props => props.moborder};
  @media only screen and ${device.tablet} {
    --width: ${({ mobile, tablet }) => tablet || mobile};
    order: ${({ moborder, taborder }) => taborder || moborder};
  }
  @media only screen and ${device.desktop} {
    --width: ${({ desktop, tablet }) => desktop || tablet};
    order: ${({ dtorder, taborder }) => dtorder || taborder};
  }
`

export const GridRow = styled.div`
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  --columns: ${props => props.columns || 4};
  margin: 1rem;
  ${GridColumn} {
    --initialbasis: calc(var(--width, 0) / var(--columns) * 100%);
    --gap: calc((var(--columns) - var(--width)) * 0.2%);
    flex-basis: calc(var(--initialbasis) - var(--gap));
  }
`

export const Row = styled.div`
  margin: 0;
  display: flex;
  flex-flow: ${({ wrap }) => (wrap ? 'row wrap' : 'row nowrap')};
  justify-content: space-between;
`

export const StickyContainer = styled.div`
  ${({ isSticky }) =>
    isSticky &&
    `
    position: fixed;
    width: 100%;
    z-index: 99;
    bottom: 0px;
  `};
`

export const Line = styled.div`
  display: ${({ visible }) => (visible === true ? 'block' : 'none')};
  border-bottom: 1px solid #dedede;
  margin: 0;
  width: 100%;
`
