import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/layout'
import GlobalStyle from '../components/styled/global-style'
import VehicleTile from '../components/vehicle/vehicle-tile'
import { graphql } from 'gatsby'

const AvailableVehicles = ({ data }) => {
  const [carData, setCarData] = useState([])

  useEffect(() => {
    if (data) {
      const {
        cars: { edges: nodeArray },
      } = data

      setCarData(nodeArray)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <Layout>
        {carData.length > 0 && (
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

// export const getCars = graphql`
//   query {
//     cars: allContentfulCars {
//       edges {
//         node {
//           model
//           manual
//           mileage
//           hybrid
//           image {
//             fluid(maxWidth: 500, maxHeight: 300) {
//               ...GatsbyContentfulFluid
//             }
//           }
//           efficient
//           owners
//           registration
//         }
//       }
//     }
//   }
// `

export default AvailableVehicles
