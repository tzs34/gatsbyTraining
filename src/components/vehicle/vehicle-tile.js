import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { GridRow, GridColumn, Line } from '../styled/components'
import InfoIcon from './info-icon'
import Efficiency from './vehicle-icons/efficient'
import Mileage from './vehicle-icons/mileage'
import Power from './vehicle-icons/power'
import Manual from './vehicle-icons/manual'
import Hybrid from './vehicle-icons/hybrid'
import Owners from './vehicle-icons/owners'

const ImageSection = styled.div`
  &:hover {
    cursor: pointer;
  }
  position: relative;
  margin: auto;
`

const VehicleInfoSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const VehicleTitleHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`

const VehicleTitleSubHeader = styled.div`
  color: #7e7e7e;
  font-size: 15px;
  line-height: 20px;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`
const VehicleSpecs = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ padding }) =>
    padding && padding.paddingLeft && `padding-left: ${padding.paddingLeft}px`};
`

const VehicleTile = ({
  efficient,
  hybrid,
  image,
  manual,
  mileage,
  model,
  owners,
  registration,
}) => (
  <>
    <GridRow columns={6}>
      <GridColumn desktop={3} tablet={4} mobile={4}>
        <ImageSection>{image && <Image fluid={image.fluid} />}</ImageSection>
      </GridColumn>
      <GridColumn desktop={3} tablet={2} mobile={2}>
        <VehicleInfoSectionContainer>
          <VehicleTitleHeader>{model}</VehicleTitleHeader>
          <VehicleTitleSubHeader>
            Lorem ipsum dolor sit amet
          </VehicleTitleSubHeader>
          <Line visible />
          <VehicleSpecs>
            <InfoIcon label="Charging Time" value={efficient}></InfoIcon>
            <InfoIcon label="Hybrid" value={hybrid ? 'Yes' : 'No'}></InfoIcon>
            <InfoIcon
              label="Registartion Date"
              value={new Date(registration).toDateString()}
            ></InfoIcon>
            <InfoIcon label="Current Milage (miles)" value={mileage}></InfoIcon>
            <InfoIcon
              label="Manual / Automatic"
              value={manual ? 'Manual' : 'Automatic'}
            ></InfoIcon>
            <InfoIcon label="Number of Owners" value={owners}></InfoIcon>
          </VehicleSpecs>
        </VehicleInfoSectionContainer>
      </GridColumn>
    </GridRow>
  </>
)

export default VehicleTile
