/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import ContentWrapper from "./contentWrapper"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
