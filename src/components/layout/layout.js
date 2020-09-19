import React from "react"

import Header from "../header/header"
import Footer from '../footer/footer'
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <Header />
      <div className='content'>
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
