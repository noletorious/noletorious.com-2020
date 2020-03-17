import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import bootstraps: Container, Col, Row
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "gatsby-image"
import styled from "styled-components"

const TimelineDivider = styled.div`
  width: 1px;
  height: 25px;
  margin: 0.5em 0;
  border-left: 1px solid rgba(255, 255, 255, 0.25);
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      noel: file(relativePath: { eq: "noel-trimet.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <p
              className={["text-muted", "small", "my-3", "text-center"].join(
                " "
              )}
            >
              Web Designer / Developer - Currently helping my city #gobytransit.{" "}
              <a href="//instagram.com/trimet">@trimet</a>
            </p>

            <Image
              fluid={data.noel.childImageSharp.fluid}
              className={["my-3", "rounded-lg"].join(" ")}
            />
            <h1 className={["h3", "mt-5", "mb-3"].join(" ")}>Hello World!</h1>
            <p>
              Full-stack designer currently in Portland, Oregon. Through my
              career I've developed interdisciplinary skillsets within the realm
              of interaction and interface design.
            </p>
            <Row>
              <Col>
                <h2
                  className={[
                    "small",
                    "text-muted",
                    "mt-5",
                    "mb-3",
                    "text-uppercase",
                    "border-bottom",
                    "pb-3",
                  ].join(" ")}
                >
                  Experience
                </h2>
                <h3>TriMet</h3>
                <p className={["font-weight-bold", "small", "mb-1"].join(" ")}>
                  [2017-Present] Web Designer/Developer
                </p>
                <TimelineDivider />
                <h3>Attensa</h3>
                <p className={["small", "mb-1"].join(" ")}>
                  [2014-2017] Visual/UI Designer
                </p>
                <TimelineDivider />
                <h3>AboutUs</h3>
                <p className={["small", "mb-1"].join(" ")}>
                  [2012-2014] Web Designer
                </p>
                <TimelineDivider />
                <h3>Passport2 Network</h3>
                <p className={["small", "mb-1"].join(" ")}>
                  [2010-2011] Jr. Web Designer
                </p>
                <TimelineDivider />
                <h3>Southern Oregon University</h3>
                <p className={["small", "mb-1"].join(" ")}>
                  [2007-2011] Computer Science
                </p>
                <p>&nbsp;</p>
              </Col>
              <Col>
                <h2
                  className={[
                    "small",
                    "text-muted",
                    "mt-5",
                    "mb-3",
                    "text-uppercase",
                    "border-bottom",
                    "pb-3",
                  ].join(" ")}
                >
                  Proficiencies
                </h2>
                <ul style={{ paddingInlineStart: "20px" }}>
                  <li>
                    <h5>Golf</h5>
                    <p className={["small", "mb-3"].join(" ")}>
                      [1994-Present] Scratch handicap
                    </p>
                  </li>
                  <li>
                    <h5>Development</h5>
                    <p className={["small", "mb-3"].join(" ")}>
                      [2016-2020] Reactjs, VSCode, Android Studio, learning
                      Flutter
                    </p>
                  </li>
                  <li>
                    <h5>Design</h5>
                    <p className={["small", "mb-3"].join(" ")}>
                      [2011-2020] Adobe CS Suite: AE, XD, AI, PS; Framerjs
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default About
