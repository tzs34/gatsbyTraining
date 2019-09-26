import React from 'react'
import styles from '../css/banner.module.css'
import { Link } from 'gatsby'

const Banner = ({ title }) => {
  return (
    <div className={styles.banner}>
      <Link to="/available-cars/">{title}</Link>
    </div>
  )
}

export default Banner
