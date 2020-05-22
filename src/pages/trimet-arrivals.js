import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import useDarkMode from "use-dark-mode"

const TriMetArrivals = () => {
  const darkMode = useDarkMode()
  useEffect(() => {
    console.log("useEffect")
    return darkMode.disable()
    // Run! Like go get some data from an API.
  }, [])
  const data = useStaticQuery(graphql`
    query {
      homes: file(relativePath: { eq: "arrivals/homes.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rosette: file(relativePath: { eq: "arrivals/rosette.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const RosetteImageWrap = styled.div`
    max-width: 75px;
    width: 75px;
    margin: 1em 0;
  `
  return (
    <Layout>
      <Container fluid>
        <Container className="py-5">
          <Row>
            <Col
              className={["d-flex", "align-items-center", "flex-row"].join(" ")}
            >
              <div
                className={[
                  "align-items-center",
                  "justify-content-center",
                  "m-auto",
                ].join(" ")}
              >
                <RosetteImageWrap>
                  <Image fluid={data.rosette.childImageSharp.fluid} />
                </RosetteImageWrap>
                <h1>Arrivals</h1>
                <p>App concept based on TriMet's Transit Tracker</p>
              </div>
            </Col>
            <Col>
              <Image
                fluid={data.homes.childImageSharp.fluid}
                className="rounded-lg"
              />
            </Col>
          </Row>
        </Container>
        {/* Header section */}
        <Container>
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              <h3 className={["mb-3"].join(" ")}>Overview</h3>
              <div
                className={["bg-gray", "p-5", "border", "g-rounded"].join(" ")}
              >
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "text-muted",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Background
                </h3>
                <p className={["pb-5"].join(" ")}>
                  The transit tracker tool used on{" "}
                  <a href="https://trimet.org/" target="_blank" rel="noref">
                    trimet.org
                  </a>{" "}
                  is the most used tool on the website. As a rider myself I
                  wanted to create a blue-sky featured app that focused
                  leveraging not all, but the most useful data from TriMet's
                  public API.{" "}
                </p>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "text-muted",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Problem
                </h3>
                <p className={["pb-5"].join(" ")}>
                  With so many people relying on this information having it
                  accessible via an application would allow TriMet to extend
                  their service and utilitize more of their capabilities beyond
                  the browser.{" "}
                </p>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "text-muted",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Metrics
                </h3>
                <div className={["pb-0"].join(" ")}>
                  <div
                    className={[
                      "d-flex",
                      "flex-row",
                      "border-bottom",
                      "py-3",
                    ].join(" ")}
                  >
                    <div className={["p-2", "font-weight-bold"].join(" ")}>
                      8 million pageviews per month
                    </div>
                  </div>
                  <div
                    className={[
                      "d-flex",
                      "flex-row",
                      "border-bottom",
                      "py-3",
                    ].join(" ")}
                  >
                    <div className={["p-2", "font-weight-bold"].join(" ")}>
                      %95
                    </div>
                    <div className={["flex-fill", "p-2"].join(" ")}>
                      come for transit tracker, trip planner, and alerts.
                    </div>
                  </div>
                  <div className={["d-flex", "flex-row", "pt-3"].join(" ")}>
                    <div className={["p-2", "font-weight-bold"].join(" ")}>
                      %70
                    </div>
                    <div className={["flex-fill", "p-2"].join(" ")}>
                      access trimet.org on their phone.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              <h3 className={["mb-3"].join(" ")}>Research</h3>
              <div
                className={["bg-gray", "p-5", "border", "g-rounded"].join(" ")}
              >
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "text-muted",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Surveys
                </h3>
                <ul className="mb-3">
                  <li>2019 web surveys</li>
                  <li>2019 MOD beta feedback</li>
                  <li>2018 Customer Experience Audit</li>
                  <li>2017 Trip Tools Survey</li>
                  <li>2014 focus group SIPs</li>
                  <li>Social media and other rider feedback</li>
                </ul>
                <p>
                  There were many motives and findings per survey, however, each
                  survey shared the context which was to understand the user
                  experience and perception around the reliability of our
                  information/service and what they liked/disliked about our
                  trip tools.{" "}
                </p>

                <h3
                  className={[
                    "mt-5",
                    "mb-3",
                    "small",
                    "text-muted",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Top 10: What do riders want
                </h3>
                <ol className="mb-3">
                  <li>Real-time vehicle locations on map</li>
                  <li>Nearby service (GPS)</li>
                  <li>Save favorites/preferences</li>
                  <li>Real-time trip planning</li>
                  <li>Better alerts</li>
                  <li className="text-muted">Guided navigation</li>
                  <li>Alarms/notifications</li>
                  <li>Voice command</li>
                  <li>Hop integration</li>
                  <li className="text-muted">Flexible/smart itineraries</li>
                </ol>
                <p>
                  In terms of their experience with our existing services the
                  top 10 above list number one as the most asked for
                  feature/improvement and ten was the least. Talk about how this
                  app would address some but not all.{" "}
                </p>
              </div>
            </Col>
          </Row>
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              <h3 className={["mb-5"].join(" ")}>The User</h3>
              <div
                className={["bg-gray", "p-5", "border", "g-rounded"].join(" ")}
              >
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "text-muted",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Persona
                </h3>
                <p>At TriMet we've identified </p>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "text-muted",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Process
                </h3>
                <p>
                  I based the UX flow off of the trimet.org re-architecture
                  project which at its core simply takes a subset of transit
                  tracker features.
                </p>
                <p>[insert image of flow diagram]</p>
              </div>
            </Col>
          </Row>
          <Row className={["mb-5", "py-5"].join(" ")}>
            <Col xs={{ span: 12 }}>
              <h3 className={["mb-3", "text-center"].join(" ")}>
                Interactions
              </h3>
            </Col>
          </Row>
          <Row className={["mb-5", "py-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <img
                src="https://via.placeholder.com/500x250"
                alt="placeholder"
                className="img-fluid"
              />
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <h3 className={["mb-3"].join(" ")}>Refresh your favorites</h3>
              <p>Words Words words</p>
            </Col>
          </Row>
          <Row className={["mb-5", "py-5"].join(" ")}>
            <Col xs={{ span: 12 }}>
              <h3 className={["mb-3", "text-center"].join(" ")}>Prototype</h3>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  )
}

export default TriMetArrivals
