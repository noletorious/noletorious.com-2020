import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import DarkModeToggle from "./DarkModeToggle"
import styled from "styled-components"
import ScrollChor from "react-scrollchor"
import { Location } from "@reach/router"
import useDarkMode from "use-dark-mode"

const TheNavBarBrand = styled(Navbar.Brand)`
  margin-right: 0;
`

const TheNavBar = () => {
  const darkMode = useDarkMode()
  const imgData = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "noletorious_2020_logo.png" }
      ) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand
      variant={darkMode.value ? "dark" : "light"}
    >
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about" eventkey={1}>
            About
          </Nav.Link>
          <Nav.Item eventkey={2}>
            <Location>
              {({ location }) => {
                if (location.pathname === "/") {
                  return (
                    <ScrollChor className="nav-link" to="#work">
                      Work
                    </ScrollChor>
                  )
                } else {
                  return (
                    <Link className="nav-link" to="/#work">
                      Work
                    </Link>
                  )
                }
              }}
            </Location>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <TheNavBarBrand>
        <Link to="/">
          <Image
            className={["align-middle", "ml-4", "mr-3"].join(" ")}
            fixed={imgData.placeholderImage.childImageSharp.fixed}
          />
        </Link>
      </TheNavBarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item eventkey={3} className="nav-link">
            <DarkModeToggle />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

TheNavBar.propTypes = {
  siteTitle: PropTypes.string,
  theme: PropTypes.bool,
}

TheNavBar.defaultProps = {
  siteTitle: `Noel Torres Portfolio`,
}

export default TheNavBar
