import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const contentWrapper = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default contentWrapper
