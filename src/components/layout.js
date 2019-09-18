import React from 'react'
import NavBar from '../components/Navbar'

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main>{children}</main>
  </>
)

export default Layout
