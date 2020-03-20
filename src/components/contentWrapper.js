import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const contentWrapper = ({ children }) => {
  return (
    <div className="content">
      <Navbar isIndex={window.location.pathname === "/" ? true : false} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default contentWrapper
