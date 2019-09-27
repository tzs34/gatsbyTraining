import React from 'react'
import Layout from '../components/layout/layout'
import GlobalStyle from '../components/styled/global-style'
import VehicleTile from '../components/vehicle/vehicle-tile'
import { graphql } from 'gatsby'

const AvailableVehicles = props => {
  const {
    data: {
      cars: { edges: carData },
    },
  } = props
  return (
    <>
      <GlobalStyle />
      <Layout>
        {props.data && (
          <div>
            {carData.map(({ node }, index) => (
              <VehicleTile {...node} key={index} />
            ))}
          </div>
        )}
      </Layout>
    </>
  )
}

export const getCars = graphql`
  query {
    cars: allContentfulCars {
      edges {
        node {
          model
          manual
          mileage
          hybrid
          image {
            fluid(maxWidth: 500, maxHeight: 300) {
              ...GatsbyContentfulFluid
            }
          }
          efficient
          owners
          registration
        }
      }
    }
  }
`

export default AvailableVehicles
