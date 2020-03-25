import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Accordion from "react-bootstrap/Accordion"
import { useAccordionToggle } from "react-bootstrap/AccordionToggle"
import Card from "react-bootstrap/Card"
import Image from "gatsby-image"
import styled from "styled-components"
import useDarkMode from "use-dark-mode"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const GoogleMapsRedesign = () => {
  const darkMode = useDarkMode(true)
  function headerText() {
    const classNames = ["text-uppercase", "text-muted", "mb-3"].join(" ")
    return classNames
  }
  function captionText() {
    const classNames = ["small", "text-muted", "text-center", "my-4"].join(" ")
    return classNames
  }
  useEffect(() => {
    console.log("useEffect")
    return darkMode.disable()
    // Run! Like go get some data from an API.
  }, [])
  const data = useStaticQuery(graphql`
    query {
      gmapsCurrent1: file(relativePath: { eq: "gmr/maps-current-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gmapsCurrent2: file(relativePath: { eq: "gmr/maps-current-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gmapsCurrent3: file(relativePath: { eq: "gmr/maps-current-3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gmapsCurrent4: file(relativePath: { eq: "gmr/maps-current-4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const PageWrapper = styled(Container)`
    font-family: "Noto Sans", sans-serif !important;
  `
  const SectionHeaders = styled.h3`
    text-decoration: uppercase;
  `
  const SectionHeaderInner = styled.span`
    border-bottom: solid 1px ${darkMode.value ? "#b6fff4" : "#ff657c"};
  `
  const NotesCard = styled(Card)`
    border: none;
    background-color: transparent;
  `
  const NotesCardBody = styled(Card.Body)`
    background-color: ${darkMode.value
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)"};
  `
  const Section = styled(Container)`
    padding: 3em 0;
  `

  const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    font-size: 0.75em;
  `

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log("totally custom!")
    )
    return <div onClick={decoratedOnClick}>{children}</div>
  }

  return (
    <Layout>
      <PageWrapper fluid>
        <Container>
          <Row>
            <Col
              className={["d-flex", "align-items-center", "flex-row"].join(" ")}
            >
              <div className="align-self-center">
                <h1>Google</h1>
                <h1>Maps Redesign</h1>
              </div>
            </Col>
            <Col>
              <img
                src="https://via.placeholder.com/500x500"
                alt="placeholder"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
        {/* Overview */}
        <Section>
          <Row>
            <Col className="py-5">
              <SectionHeaders>
                <SectionHeaderInner>Overview</SectionHeaderInner>
              </SectionHeaders>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 12 }} sm={{ span: 8 }}>
              <h5 className={headerText()}>Problem</h5>
              <p>
                I personally love Google Maps and understand how the Navigation
                portion is separate from the Maps portion. I'd like to just
                enhance a few features and interactions to shorten the time it
                takes to get on task and augment guide navigation while on
                public transit.
              </p>
              <h5 className={headerText()}>Solution</h5>
              <p>
                In Maps, give the user the option to pick a mode they want to
                start with.
              </p>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 4 }}>
              <p className={headerText()}>Category</p>
              <p>Public Transit, Navigation, Interaction Design</p>
              <p className={headerText()}>Tools</p>
              <p>Adobe: Illustrator, XD, After Effects</p>
            </Col>
          </Row>
        </Section>
        {/* Maps Current Flow */}
        <Section>
          <Row>
            <Col className="pt-5">
              <Accordion>
                <NotesCard>
                  <CustomToggle eventKey="0">
                    <SectionHeaders>
                      <SectionHeaderInner>
                        Maps Current Flow{" "}
                        <FontAwesomeIconStyled
                          icon={faChevronDown}
                          eventKey="0"
                        />
                      </SectionHeaderInner>
                    </SectionHeaders>
                  </CustomToggle>
                  <Accordion.Collapse eventKey="0">
                    <NotesCardBody>
                      <p>
                        The scenario I used was getting to work, but this can be
                        generalized to probably the most common scenario: Find
                        your location then start your trip.
                      </p>
                    </NotesCardBody>
                  </Accordion.Collapse>
                </NotesCard>
              </Accordion>
            </Col>
          </Row>
          <Row className="py-5">
            <Col xs={{ span: 3 }}>
              <p className={captionText()}>Home screen > </p>
              <Image
                className={["border", "rounded-lg"].join(" ")}
                fluid={data.gmapsCurrent1.childImageSharp.fluid}
                alt="Google Maps Screentshots"
              />
            </Col>
            <Col xs={{ span: 3 }}>
              <p className={captionText()}>Type in destination > </p>
              <Image
                className={["border", "rounded-lg"].join(" ")}
                fluid={data.gmapsCurrent2.childImageSharp.fluid}
                alt="Google Maps Screentshots"
              />
            </Col>
            <Col xs={{ span: 3 }}>
              <p className={captionText()}>Verify location, take action > </p>
              <Image
                className={["border", "rounded-lg"].join(" ")}
                fluid={data.gmapsCurrent3.childImageSharp.fluid}
                alt="Google Maps Screentshots"
              />
            </Col>
            <Col xs={{ span: 3 }}>
              <p className={captionText()}>Select Route > </p>
              <Image
                className={["border", "rounded-lg"].join(" ")}
                fluid={data.gmapsCurrent4.childImageSharp.fluid}
                alt="Google Maps Screentshots"
              />
            </Col>
          </Row>
          <Row>
            <Col className="pt-5">
              <h3 className={["my-5", "text-center"].join(" ")}>Redesign </h3>
              <img
                src="https://via.placeholder.com/1920x1080"
                alt="placeholder"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Section>
      </PageWrapper>
      <style>
        @import
        url("https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap");
      </style>
    </Layout>
  )
}

export default GoogleMapsRedesign
