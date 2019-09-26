import styled from 'styled-components'

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

export const Row = styled.div`
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`
