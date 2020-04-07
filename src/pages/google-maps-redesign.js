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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const GoogleMapsRedesign = () => {
  const darkMode = useDarkMode()
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
  const OverviewSection = styled.div`
    max-width: 1440px;
    padding: 3em;
    margin: 0 auto;
  `
  const ImageSection = styled.div`
    max-width: 1440px;
    padding: 3em;
    margin: 0 auto;
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
        {/* Header */}
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
        <Container fluid>
          <OverviewSection className={["py-5", "bg-light"].join(" ")}>
            <Row>
              <Col className="mb-5">
                <SectionHeaders>
                  <SectionHeaderInner>Overview</SectionHeaderInner>
                </SectionHeaders>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 12 }} sm={{ span: 8 }}>
                <h5 className={headerText()}>Problem</h5>
                <p className="mb-5">
                  I personally love Google Maps and understand how the
                  Navigation portion is separate from the Maps portion. I'd like
                  to just enhance a few features and interactions to shorten the
                  time it takes to get on task and augment guide navigation
                  while on public transit.
                </p>
                <h5 className={headerText()}>Solution</h5>
                <p>
                  In Maps, give the user the option to pick a mode they want to
                  start with. This could be paired with machine learning. Maps
                  should pick up on basic behavior and serve the best option at
                  a given time. People do things for different reasons on maps,
                  time to task and time on task is important. Give'um what they
                  want as Maps learns.
                </p>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 4 }}>
                <p className={headerText()}>Category</p>
                <p>Public Transit, Navigation, Interaction Design</p>
                <p className={headerText()}>Tools</p>
                <p>Adobe: Illustrator, XD, After Effects</p>
              </Col>
            </Row>
          </OverviewSection>
        </Container>
        {/* Research */}
        <Container>
          <Section>
            <Row>
              <Col className="pt-5">
                <Accordion>
                  <NotesCard>
                    <CustomToggle eventKey="0">
                      <SectionHeaders>
                        <SectionHeaderInner>
                          Research{" "}
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
                          I don't consider myself a researcher, I count on other
                          people to do that. My time with TriMet, I've worked
                          with hundreds of people that are closely involved and
                          are the the people to ask regarding the customer
                          experience. Working with other designers, data analyst
                          as well as our internal survey team, it was clear what
                          users liked about our current system which pointed out
                          areas of improvement as well. My role was to audit
                          other transit apps, digest customer feedback, and
                          design a product with all this in mind.
                        </p>
                        <p>
                          TL;DR: Working for TriMet has given insight into
                          people wants, needs and desires when it came to riding
                          public transit.{" "}
                        </p>
                      </NotesCardBody>
                    </Accordion.Collapse>
                  </NotesCard>
                </Accordion>
              </Col>
            </Row>
          </Section>
        </Container>
        {/* Research Images */}
        <Container fluid>
          <ImageSection>
            <Row className="pt-5">
              <Col xs={{ span: 6 }}>
                <p className={captionText()}>Home screen > </p>
                <img
                  src="https://via.placeholder.com/1920x1080"
                  alt="placeholder"
                  className="img-fluid"
                />
              </Col>
              <Col xs={{ span: 6 }}>
                <p className={captionText()}>Home screen > </p>
                <img
                  src="https://via.placeholder.com/1920x1080"
                  alt="placeholder"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </ImageSection>
        </Container>
        {/* Maps Current Flow */}
        <Section>
          <Row>
            <Col className="pt-5">
              <Accordion>
                <NotesCard>
                  <CustomToggle eventKey="1">
                    <SectionHeaders>
                      <SectionHeaderInner>
                        Maps Current Flow{" "}
                        <FontAwesomeIconStyled
                          icon={faChevronDown}
                          eventKey="1"
                        />
                      </SectionHeaderInner>
                    </SectionHeaders>
                  </CustomToggle>
                  <Accordion.Collapse eventKey="1">
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
