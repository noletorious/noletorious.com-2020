import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import useDarkMode from "use-dark-mode"
import DarkModeToggle from "./DarkModeToggle"
import styled from "styled-components"
import ScrollChor from "react-scrollchor"

const TheNavBarBrand = styled(Navbar.Brand)`
  margin-right: 0;
`

const TheNavBar = ({ isIndex }) => {
  const darkMode = useDarkMode(false)
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
          <Nav.Link href="/about" eventKey={1}>
            About
          </Nav.Link>
          <Nav.Item eventKey={2}>
            {isIndex ? (
              <ScrollChor className="nav-link" to="#work">
                Work
              </ScrollChor>
            ) : (
              <Link className="nav-link" to="/#work">
                Work
              </Link>
            )}
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
          <Nav.Item eventKey={3} className="nav-link">
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
