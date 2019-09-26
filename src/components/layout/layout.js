import React from 'react'
import NavBar from '../navigation/navbar'
import Footer from '../navigation/footer'
const Layout = ({ children }) => (
  <>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
