import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import useDarkMode from "use-dark-mode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUsersCog,
  faUserCheck,
  faUserShield,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons"
import NextContentPage from "../components/NextContentPage"

const TriMetArrivals = () => {
  const darkMode = useDarkMode()
  useEffect(() => {
    console.log("useEffect")
    return darkMode.disable()
    // Run! Like go get some data from an API.
  }, [])
  const data = useStaticQuery(graphql`
    query {
      arrivalsxd: file(
        relativePath: { eq: "arrivals/arrivals-xd-screenshot.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iteration21: file(relativePath: { eq: "arrivals/TT-iteration-2.1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iteration2: file(relativePath: { eq: "arrivals/TT-iteration-2.0.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iteration1: file(relativePath: { eq: "arrivals/TT-iteration-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      audit: file(relativePath: { eq: "arrivals/trimetorg-audit.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
  const UnorderedList = styled.ul`
    line-height: 2.6;
  `
  const OrderedList = styled.ol`
    line-height: 2.6;
  `
  const RiderCol = styled(Col)`
    background-color: rgba(255, 255, 255, 0.1);
    margin: 1em;
    height: 150px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `
  const ToProtoButton = styled.button`
    border-radius: 100px;
    background-color: #084c8d;
    color: #fff;
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
          {/* Overview */}
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
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Background
                </h3>
                <p className={["pb-5", "text-muted"].join(" ")}>
                  The transit tracker tool on{" "}
                  <a href="https://trimet.org/" target="_blank" rel="noref">
                    trimet.org
                  </a>{" "}
                  is the most used tool on the website. As a rider myself, I
                  wanted to create a blue-sky, yet a very feature-focused app
                  that would in theory use not all but the most useful data
                  available from TriMet's public transit tracker API.{" "}
                </p>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Problem
                </h3>
                <p className={["pb-5", "text-muted"].join(" ")}>
                  With so many people relying on this information having it
                  accessible via an application would allow TriMet to extend
                  their services and utilitize more of their capabilities
                  especially beyond the browser.{" "}
                </p>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Metrics
                </h3>
                <div className={["pb-0", "text-muted"].join(" ")}>
                  <div
                    className={[
                      "d-flex",
                      "flex-row",
                      "border-bottom",
                      "py-3",
                    ].join(" ")}
                  >
                    <div className={["p-2"].join(" ")}>
                      <span className="font-weight-bold">8 million</span>{" "}
                      pageviews per month
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
                      come for transit tracker, trip planner, and alerts
                    </div>
                  </div>
                  <div className={["d-flex", "flex-row", "pt-3"].join(" ")}>
                    <div className={["p-2", "font-weight-bold"].join(" ")}>
                      %70
                    </div>
                    <div className={["flex-fill", "p-2"].join(" ")}>
                      access trimet.org on their phone
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* Research */}
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
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Surveys
                </h3>
                <UnorderedList className="mb-3">
                  <li>2019 web surveys</li>
                  <li>2019 MOD beta feedback</li>
                  <li>2018 Customer Experience Audit</li>
                  <li>2017 Trip Tools Survey</li>
                  <li>2014 focus group SIPs</li>
                  <li>Social media and other rider feedback</li>
                </UnorderedList>
                <p className="text-muted">
                  With many motives and findings per survey, each survey shared
                  the underlying context which was to help TriMet understand the
                  user's experience and perception around the reliability of our
                  information/service.{" "}
                </p>
                <p className="text-muted">
                  Consolidating user feedback, the list below describes the top
                  10 user <em>wants</em> from current users of our trip tools.
                  Number one being the most asked for feature and ten the least:
                </p>
                <h3
                  className={[
                    "mt-5",
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  What riders want
                </h3>
                <OrderedList className="mb-3">
                  <li>Real-time vehicle locations on map</li>
                  <li>Nearby service relative to current location</li>
                  <li>Save favorites/preferences</li>
                  <li>R̶e̶a̶l̶-̶t̶i̶m̶e̶ ̶t̶r̶i̶p̶ ̶p̶l̶a̶n̶n̶i̶n̶g̶ (Out of scope)</li>
                  <li>Better alerts</li>
                  <li>G̶u̶i̶d̶e̶d̶ ̶n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶ (Out of scope)</li>
                  <li>Alarms/notifications</li>
                  <li>Voice command</li>
                  <li>Hop integration</li>
                  <li>F̶l̶e̶x̶i̶b̶l̶e̶/̶s̶m̶a̶r̶t̶ ̶i̶t̶i̶n̶e̶r̶a̶r̶i̶e̶s̶ (Out of scope)</li>
                </OrderedList>
                <p className="text-muted">
                  Back to the initial ideas of this concept app, I've marked
                  which <em>wants</em> I thought were out of scope as they would
                  be better suited under trip planning features. Again, my goal
                  was to create an app concept that did a few things really
                  well, however this concept app could scale considering the
                  available data.{" "}
                </p>
              </div>
            </Col>
          </Row>
          {/* Personas */}
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              <h3 className={["mb-3"].join(" ")}>The User/Rider</h3>
              <div
                className={["bg-gray", "p-5", "border", "g-rounded"].join(" ")}
              >
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Personas
                </h3>
                <p className="text-muted">
                  From our Audience Segmentation Survey Research Report, we
                  generally break them each persona in four categories:
                </p>
                <Row>
                  <RiderCol className="border">
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      size="2x"
                      className="mb-2"
                    />
                    <p>Transit-Reliant Persona</p>
                  </RiderCol>
                  <RiderCol className="border">
                    <FontAwesomeIcon
                      icon={faUsersCog}
                      size="2x"
                      className="mb-2"
                    />
                    <p>Strategic User Persona</p>
                  </RiderCol>
                </Row>
                <Row className="mb-5">
                  <RiderCol className="border">
                    <FontAwesomeIcon
                      icon={faUserShield}
                      size="2x"
                      className="mb-2"
                    />
                    <p>Transit Hesitant Persona</p>
                  </RiderCol>
                  <RiderCol>
                    <FontAwesomeIcon
                      icon={faUserTimes}
                      size="2x"
                      className="mb-2"
                    />
                    <p>Non-Rider Persona</p>
                  </RiderCol>
                </Row>
                <p className="text-muted">
                  For a deeper dive in to the details of each persona, I will
                  have a private page where I breakdown our method for designing
                  the trimet.org re-architecture.{" "}
                </p>
                <p>
                  <span className="text-muted">
                    The persona that would benefit most from this concept app,
                    would be{" "}
                  </span>
                  <span className={["font-weight-bold"].join(" ")}>
                    any transit rider with a mobile smart phone.
                  </span>{" "}
                </p>
              </div>
            </Col>
          </Row>
          {/* Process */}
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              <h3 className={["mb-3"].join(" ")}>Flows</h3>
              <div
                className={["bg-gray", "p-5", "border", "g-rounded"].join(" ")}
              >
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Transit tracker
                </h3>
                <p className="text-muted">
                  I based the UX flow of this concept app closely to the
                  trimet.org re-architecture(TORA) project particularly the
                  transit tracker tools.
                </p>
                <p className="text-muted">
                  To summarize the process my manager, senior designer and I
                  took: We first considered our constraints to replicate/enhance
                  current features of the website, next we considered what are
                  the best practices in this app market, then I considered the
                  technology it was being built with and how we could optimize
                  for delivering these requirements to engineers.
                </p>
                <p className="text-muted">
                  After a few large iterations, we landed on a flow that found a
                  good balance between complexity and efficiency.
                </p>
                <p
                  className={[
                    "text-center",
                    "text-muted",
                    "small",
                    "mt-5",
                  ].join(" ")}
                >
                  Generalized audit of trimet.org trip tool features.
                </p>
                <Image
                  fluid={data.audit.childImageSharp.fluid}
                  className="rounded-lg"
                />
                <div
                  className={["mb-5", "pb-5", "border-bottom"].join(" ")}
                ></div>
                <p
                  className={[
                    "text-center",
                    "text-muted",
                    "small",
                    "mt-5",
                  ].join(" ")}
                >
                  Lower fidelity mockups.
                </p>
                <Image
                  fluid={data.iteration1.childImageSharp.fluid}
                  className={["rounded-lg", "mx-auto"].join(" ")}
                />
                <div
                  className={["mb-5", "pb-5", "border-bottom"].join(" ")}
                ></div>
                <p
                  className={[
                    "text-center",
                    "text-muted",
                    "small",
                    "mt-5",
                  ].join(" ")}
                >
                  Higher fidelity mockups.
                </p>
                <Image
                  fluid={data.iteration2.childImageSharp.fluid}
                  className="rounded-lg"
                />
                <Image
                  fluid={data.iteration21.childImageSharp.fluid}
                  className="rounded-lg"
                />
                <p className="mb-4"></p>
              </div>
            </Col>
          </Row>
          {/* Interactions */}
          <Row className={["py-5"].join(" ")}>
            <Col xs={{ span: 12 }}>
              <h3 className={["mb-3", "text-center"].join(" ")}>
                Interactions
              </h3>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ backgroundColor: "#e4e4e4" }}>
        <Container>
          <Row>
            <Col>
              <Image
                fluid={data.arrivalsxd.childImageSharp.fluid}
                className="rounded-lg"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Container className="pt-5">
          <Row className={["pt-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <img
                src="https://via.placeholder.com/500x500"
                alt="placeholder"
                className={["img-fluid", "mb-3"].join(" ")}
              />
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 6 }}
              className={["align-items-center", "d-flex"].join(" ")}
            >
              <div className={["flex-column", "mb-5"].join(" ")}>
                <h3 className={["mb-3"].join(" ")}>
                  Your arrivals and stops upfront
                </h3>
                <UnorderedList>
                  <li>
                    Toggle your favorite stops and service lines at a stop.
                  </li>
                  <li>Add labels for more context.</li>
                </UnorderedList>
              </div>
            </Col>
          </Row>
          <Row className={["mb-5", "py-5"].join(" ")}>
            <Col
              xs={{ span: 12, order: 2 }}
              sm={{ span: 6, order: 1 }}
              className={["align-items-center", "d-flex"].join(" ")}
            >
              <div
                className={[
                  "flex-column",
                  "mb-5",
                  "text-sm-right",
                  "text-xs-left",
                ].join(" ")}
              >
                <h3 className={["mb-3"].join(" ")}>
                  Track a vehicle serving a stop
                </h3>
                <p>
                  Relative to a stop, get the position of a vehicle on the map
                  quickly.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }}>
              <img
                src="https://via.placeholder.com/500x500"
                alt="placeholder"
                className={["img-fluid", "mb-3"].join(" ")}
              />
            </Col>
          </Row>
          <Row className={["pt-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <img
                src="https://via.placeholder.com/500x500"
                alt="placeholder"
                className={["img-fluid", "mb-3"].join(" ")}
              />
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 6 }}
              className={["align-items-center", "d-flex"].join(" ")}
            >
              <div className={["flex-column", "mb-5"].join(" ")}>
                <h3 className={["mb-3"].join(" ")}>Toggle and refresh</h3>
                <UnorderedList>
                  <li>
                    Toggle dark mode for higher contrast, helps with glare.
                  </li>
                  <li>Force refresh your arrivals.</li>
                </UnorderedList>
              </div>
            </Col>
          </Row>
          <Row className={["my-5", "pt-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              <h3 className={["mb-3"].join(" ")}>Conclusion</h3>
              <div
                className={["bg-gray", "p-5", "border", "g-rounded"].join(" ")}
              >
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Takeaways
                </h3>
                <p className="text-muted">
                  Simplifying the complicated needs of transit riders was the
                  motivation behind this experimental app. As the designer the
                  heavy lifting is balancing between complexity and efficiency,
                  user expectations, available data, the technologies involved,
                  and the available resources to build. Still, that is where the
                  fun is.
                </p>
                <p className={["pb-5", "text-muted"].join(" ")}>
                  Learning more and looking forward, I do see a possible v2 of
                  this project!
                </p>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Next: More unique, possible features
                </h3>
                <div className={["pb-0", "text-muted"].join(" ")}>
                  <div
                    className={[
                      "d-flex",
                      "flex-row",
                      "border-bottom",
                      "py-3",
                    ].join(" ")}
                  >
                    <div className={["p-2"].join(" ")}>
                      Tracking a vehicle and it's{" "}
                      <span className="font-weight-bold">rider capacity</span>.
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
                    <div className={["p-2"].join(" ")}>
                      <span className="font-weight-bold">Rider onboard</span> a
                      tracked vehicle experience.
                    </div>
                  </div>
                  <div className={["d-flex", "flex-row", "py-3"].join(" ")}>
                    <div className={["p-2"].join(" ")}>
                      <span className="font-weight-bold">
                        Additional stop feature
                      </span>{" "}
                      such as stop amenities and rider support.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={["mb-5", "py-5"].join(" ")}>
            <Col xs={{ span: 12 }}>
              <h4 className={["mb-3", "text-center"].join(" ")}>
                Enjoy the prototype
              </h4>
              <div className={["d-block", "text-center"].join(" ")}>
                <ToProtoButton
                  type="button"
                  as="a"
                  className={["btn", "btn-lg"].join(" ")}
                  href="https://xd.adobe.com/view/d1271807-eac2-4d9a-6a38-fcca214cbf2f-a716/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TriMet Arrivals
                </ToProtoButton>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <NextContentPage title="Attensa" otherProject="/attensa" />
    </Layout>
  )
}

export default TriMetArrivals
