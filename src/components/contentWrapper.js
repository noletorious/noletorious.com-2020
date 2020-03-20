import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const ContentWrapper = ({ children }) => {
  return (
    <div className="content">
      <Navbar
        isIndex={props => (props.location.pathname === "/" ? true : false)}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default ContentWrapper
