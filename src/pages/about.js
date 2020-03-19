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
import useDarkMode from "use-dark-mode"

const About = () => {
  const darkMode = useDarkMode(true)
  const TimelineDivider = styled.div`
    width: 1px;
    height: 25px;
    border-left: 1px solid
      ${darkMode.value ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)"};
  `
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

  const jobs = [
    {
      date: "2017-PRESENT",
      employer: "TriMet",
      position: "Web Designer / Developer",
    },
    { date: "2014-2017", employer: "Attensa", position: "UI/Visual Designer" },
    { date: "2012-2014", employer: "AboutUs", position: "Web Designer" },
    {
      date: "2011-2012",
      employer: "Passport2 Network",
      position: "Jr. Web Designer",
    },
    {
      date: "2007-2011",
      employer: "Southern Oregon University",
      position: "Computer Science / History of Philosophy",
    },
  ]

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
                {jobs.map(job => (
                  <div>
                    <span className={["text-muted", "small"].join(" ")}>
                      {job.date}
                    </span>{" "}
                    <h3 className="mb-0">{job.employer}</h3>
                    <p className={["font-weight-bold", "mb-1"].join(" ")}>
                      {job.position}
                    </p>
                    {job.employer === "Southern Oregon University" ? null : (
                      <TimelineDivider />
                    )}
                  </div>
                ))}
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
                    <p className={["small", "mb-3", "text-muted"].join(" ")}>
                      2 handicap
                    </p>
                  </li>
                  <li>
                    <h5>Development</h5>
                    <p className={["small", "mb-3", "text-muted"].join(" ")}>
                      Reactjs, VSCode, Android Studio, learning Flutter
                    </p>
                  </li>
                  <li>
                    <h5>Design</h5>
                    <p className={["small", "mb-3", "text-muted"].join(" ")}>
                      Adobe CS Suite: AE, XD, AI, PS; Framerjs
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
