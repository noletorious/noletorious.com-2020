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
import NextContentPage from "../components/NextContentPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const About = () => {
  const darkMode = useDarkMode()
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
      date: "2017 - Present",
      employer: "TriMet",
      position: "Web Designer / Developer",
    },
    {
      date: "2015 - Present",
      employer: "Cascadia Threads",
      position: "Design Lead",
    },
    {
      date: "2014 - 2017",
      employer: "Attensa",
      position: "UI/Visual Designer",
    },
    { date: "2012 - 2014", employer: "AboutUs", position: "Web Designer" },
    {
      date: "2011 - 2012",
      employer: "Passport2 Network",
      position: "Jr. Web Designer",
    },
    {
      date: "2007 - 2011",
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
            <Image
              fluid={data.noel.childImageSharp.fluid}
              className={["mt-3", "rounded-lg"].join(" ")}
            />
            <p
              className={[
                "small",
                "mt-2",
                "mb-1",
                "text-muted",
                "text-right",
              ].join(" ")}
            >
              SW 5th and Harrison Street, Downtown Portland{" "}
              <a
                href="https://goo.gl/maps/r85AJHhtoohpDBfEA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </a>
            </p>
            <Row>
              <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
                <p className={["my-5"].join(" ")}>
                  Full-stack designer originally from Kauai, Hawaii currently in
                  Portland, Oregon. Throughout my life I've developed a love for
                  creating good, practical, elegant, usable solutions within the
                  realm of interaction and interface design.
                </p>
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
                  Work &amp; Education
                </h2>
                {jobs.map(job => (
                  <div key={job.employer} className="mb-5">
                    <h4 className="mb-1">{job.employer}</h4>
                    <p className={["mb-1", "text-muted", "small"].join(" ")}>
                      {job.position} • {job.date}
                    </p>
                  </div>
                ))}
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
                <h2
                  className={[
                    "small",
                    "text-muted",
                    "mt-3",
                    "mb-3",
                    "text-uppercase",
                    "border-bottom",
                    "pb-3",
                  ].join(" ")}
                >
                  Muscle Memory
                </h2>
                <ul style={{ paddingInlineStart: "20px" }}>
                  <li>
                    <h5>Golf</h5>
                    <p className={["small", "mb-3", "text-muted"].join(" ")}>
                      Scratch handicap
                    </p>
                  </li>
                  <li>
                    <h5>Design</h5>
                    <p className={["small", "mb-3", "text-muted"].join(" ")}>
                      Pen, Paper, Whiteboard, Adobe CS Suite: AE, XD, AI, PS
                    </p>
                  </li>
                  <li>
                    <h5>Development</h5>
                    <p className={["small", "mb-3", "text-muted"].join(" ")}>
                      Git, Reactjs, VSCode, Android Studio
                    </p>
                  </li>
                  <li>
                    <h5>Learning</h5>
                    <p className={["small", "mb-3", "text-muted"].join(" ")}>
                      Flutter/Dart, Data Structures, Algorithms, Currently
                      enrolled in Google's Python Coursera course
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <NextContentPage title="TriMet" otherProject="/trimet" />
      </Container>
    </Layout>
  )
}

export default About
