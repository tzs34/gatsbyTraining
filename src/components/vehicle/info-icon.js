import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: '10px 20px';
  flex: 0 0 100%;
  min-width: 30%;
  color: white;
  margin-top: 0.5rem;
`

const Text = styled.div`
  padding: 0.25rem;
  margin: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-basis: 50%;
`

const InfoIcon = ({ label, value, children }) => (
  <Wrapper>
    <div>{children}</div>

    <Text>
      <div style={{ paddingLeft: 5 }}>{label}</div>
      <div>{value}</div>
    </Text>
  </Wrapper>
)

export default InfoIcon
