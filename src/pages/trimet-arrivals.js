import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUsersCog,
  faUserCheck,
  faUserShield,
  faUserTimes,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import NextContentPage from "../components/NextContentPage"
import toggleFavoritesMp4 from "../images/arrivals/toggle-favorites.mp4"
import LRFSTVMp4 from "../images/arrivals/LRFSTV.mp4"
import TVDMMp4 from "../images/arrivals/TVDM.mp4"
import toggleFavoritesWebm from "../images/arrivals/toggle-favorites.webm"
import LRFSTVWebm from "../images/arrivals/LRFSTV.webm"
import TVDMWebm from "../images/arrivals/TVDM.webm"
import useDarkMode from "use-dark-mode"

const TriMetArrivals = () => {
  const darkMode = useDarkMode()
  useEffect(() => {
    return darkMode.value
      ? darkMode.disable()
      : console.log("Should be light: " + darkMode.value)
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
          original {
            src
          }
        }
      }
      iteration2: file(relativePath: { eq: "arrivals/TT-iteration-2.0.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          original {
            src
          }
        }
      }
      iteration1: file(relativePath: { eq: "arrivals/TT-iteration-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          original {
            src
          }
        }
      }
      audit: file(relativePath: { eq: "arrivals/trimetorg-audit.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          original {
            src
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
  const flowAuditImage = data.audit.childImageSharp.original.src
  const iteration1Image = data.iteration1.childImageSharp.original.src
  const iteration2Image = data.iteration2.childImageSharp.original.src
  const iteration21Image = data.iteration21.childImageSharp.original.src
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
  const ListItem = styled.li`
    line-height: 1.6;
    margin-bottom: 1em;
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
                className={[
                  "bg-gray",
                  "py-5",
                  "px-sm-5",
                  "px-3",
                  "py-5",
                  "border",
                  "g-rounded",
                ].join(" ")}
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
                  <a
                    href="https://trimet.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    trimet.org
                  </a>{" "}
                  is the most used feature on the website. As a rider myself, I
                  wanted to create a feature-focused app that would leverage
                  TriMet's public <strong>transit tracker</strong> API.{" "}
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
                  Many people rely on transit tracker information and having it
                  accessible via a mobile app would allow TriMet to extend their
                  services and utilitize more of their capabilities beyond the
                  browser.{" "}
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
                className={[
                  "bg-gray",
                  "px-sm-5",
                  "px-3",
                  "py-5",
                  "border",
                  "g-rounded",
                ].join(" ")}
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
                  <ListItem>2019 web surveys</ListItem>
                  <ListItem>2019 MOD beta feedback</ListItem>
                  <ListItem>2018 Customer Experience Audit</ListItem>
                  <ListItem>2017 Trip Tools Survey</ListItem>
                  <ListItem>2014 focus group SIPs</ListItem>
                  <ListItem>Social media and other rider feedback</ListItem>
                </UnorderedList>
                <p className="text-muted">
                  Each survey shared the underlying goal which was to help
                  TriMet understand the user's experience and perception around
                  the reliability of our information/service.{" "}
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
                  <ListItem>Real-time vehicle locations on map</ListItem>
                  <ListItem>
                    Nearby service relative to current location
                  </ListItem>
                  <ListItem>Save favorites/preferences</ListItem>
                  <ListItem>R̶e̶a̶l̶-̶t̶i̶m̶e̶ ̶t̶r̶i̶p̶ ̶p̶l̶a̶n̶n̶i̶n̶g̶ (Out of scope)</ListItem>
                  <ListItem>Better alerts</ListItem>
                  <ListItem>G̶u̶i̶d̶e̶d̶ ̶n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶ (Out of scope)</ListItem>
                  <ListItem>Alarms/notifications</ListItem>
                  <ListItem>Voice command</ListItem>
                  <ListItem>Hop integration</ListItem>
                  <ListItem>F̶l̶e̶x̶i̶b̶l̶e̶/̶s̶m̶a̶r̶t̶ ̶i̶t̶i̶n̶e̶r̶a̶r̶i̶e̶s̶ (Out of scope)</ListItem>
                </OrderedList>

                <p className="text-muted">
                  The most important/common feature people wanted was to see
                  where their upcoming bus was on a map relative to their
                  current location. Back to the initial ideas of this concept
                  app, I've also marked which <em>wants</em> I thought were out
                  of scope as they would be better suited under trip planning
                  features.
                </p>
                <p className="text-muted">
                  My goal was to create an app that did a few things really
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
                className={[
                  "bg-gray",
                  "px-sm-5",
                  "px-3",
                  "py-5",
                  "border",
                  "g-rounded",
                ].join(" ")}
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
                  generally break each persona in four categories:
                </p>
                <Row>
                  <RiderCol className="border">
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      size="2x"
                      className={["mb-2", "pt-2"].join(" ")}
                    />
                    <p className={["mb-0", "pb-2"].join(" ")}>
                      Transit-Reliant Persona
                    </p>
                  </RiderCol>
                  <RiderCol className="border">
                    <FontAwesomeIcon
                      icon={faUsersCog}
                      size="2x"
                      className={["mb-2", "pt-2"].join(" ")}
                    />
                    <p className={["mb-0", "pb-2"].join(" ")}>
                      Strategic User Persona
                    </p>
                  </RiderCol>
                </Row>
                <Row className="mb-5">
                  <RiderCol className="border">
                    <FontAwesomeIcon
                      icon={faUserShield}
                      size="2x"
                      className={["mb-2", "pt-2"].join(" ")}
                    />
                    <p className={["mb-0", "pb-2"].join(" ")}>
                      Transit Hesitant Persona
                    </p>
                  </RiderCol>
                  <RiderCol>
                    <FontAwesomeIcon
                      icon={faUserTimes}
                      size="2x"
                      className={["mb-2", "pt-2"].join(" ")}
                    />
                    <p className={["mb-0", "pb-2"].join(" ")}>
                      Non-Rider Persona
                    </p>
                  </RiderCol>
                </Row>
                <p className="text-muted">
                  For a deeper dive in to the details of each persona, I will
                  have a private per request page where I breakdown our method
                  for designing the trimet.org re-architecture.{" "}
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
          {/* Design */}
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              <h3 className={["mb-3"].join(" ")}>Flows</h3>
              <div
                className={[
                  "bg-gray",
                  "px-sm-5",
                  "px-3",
                  "py-5",
                  "border",
                  "g-rounded",
                ].join(" ")}
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
                  The UX flow of this concept app closely resembles to the
                  trimet.org re-architecture(TORA) project particularly the
                  transit tracker features.
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
                  Generalized audit of trimet.org trip tool features.{" "}
                  <a
                    href={flowAuditImage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
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
                  V1: Low fidelity mockups.{" "}
                  <a
                    href={iteration1Image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
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
                    "mb-1",
                  ].join(" ")}
                >
                  V4: Higher fidelity mockups:{" "}
                </p>
                <p className={["text-center", "text-muted", "small"].join(" ")}>
                  <a
                    href={iteration2Image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-2"
                  >
                    By Stop ID <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                  {"  "}/{"  "}
                  <a
                    href={iteration21Image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pl-2"
                  >
                    By Omni-box <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </p>
                <Image
                  fluid={data.iteration2.childImageSharp.fluid}
                  className="rounded-lg"
                />
                <Image
                  fluid={data.iteration21.childImageSharp.fluid}
                  className="rounded-lg"
                />
                <p
                  className={[
                    "text-center",
                    "text-muted",
                    "small",
                    "mt-5",
                  ].join(" ")}
                >
                  After V4 the flow did not change. The entire design process
                  went to V9.{" "}
                </p>
              </div>
            </Col>
          </Row>
          {/* Interactions */}
          <Row className={["py-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              <h3 className={["mb-3", "text-center"].join(" ")}>Arrivals</h3>
              <p className={["mb-3", "text-center", "text-muted"].join(" ")}>
                {" "}
                The design uses Google material card styles, TriMet's font
                Source Sans Pro, color schemes plus a few extra accent colors. I
                acknowledge it's not 100% ADA compliant, I just wanted it to
                keep it easy on the eyes for now.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* XD interactions screenshot */}
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
              <video
                loop
                muted
                autoPlay
                className={["w-100", "h-100", "d-block"].join(" ")}
              >
                <source src={toggleFavoritesMp4} type="video/mp4" />
                <source src={toggleFavoritesWebm} type="video/webm" />
                <span className="text-light">
                  Your browser does not support HTML5 video.
                </span>
              </video>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 6 }}
              className={["align-items-center", "d-flex"].join(" ")}
            >
              <div className={["flex-column", "mb-5"].join(" ")}>
                <h3 className={["mb-4"].join(" ")}>
                  Your arrivals and stops upfront
                </h3>
                <UnorderedList>
                  <ListItem>Add labels for more context.</ListItem>
                  <ListItem>
                    Toggle your favorite stops and service lines at a stop.
                  </ListItem>
                </UnorderedList>
              </div>
            </Col>
          </Row>
          {/* Interactions */}
          <Row className={["mb-5", "pt-5"].join(" ")}>
            <Col
              xs={{ span: 12, order: 2 }}
              sm={{ span: 6, order: 1 }}
              className={["align-items-center", "d-flex"].join(" ")}
            >
              <div className={["flex-column", "mb-5"].join(" ")}>
                <h3 className={["mb-3"].join(" ")}>
                  Learn routes, find stops, get most recent data
                </h3>
                <UnorderedList>
                  <ListItem>View routes on a map.</ListItem>
                  <ListItem>Drill down to relevant stops.</ListItem>
                  <ListItem>Force refresh stop information.</ListItem>
                </UnorderedList>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }}>
              <video
                loop
                muted
                autoPlay
                className={["w-100", "h-100", "d-block"].join(" ")}
              >
                <source src={LRFSTVMp4} type="video/mp4" />
                <source src={LRFSTVWebm} type="video/webm" />
                <span className="text-light">
                  Your browser does not support HTML5 video.
                </span>
              </video>
            </Col>
          </Row>
          <Row className={["pt-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <video
                loop
                muted
                autoPlay
                className={["w-100", "h-100", "d-block"].join(" ")}
              >
                <source src={TVDMMp4} type="video/mp4" />
                <source src={TVDMWebm} type="video/webm" />
                <span className="text-light">
                  Your browser does not support HTML5 video.
                </span>
              </video>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 6 }}
              className={["align-items-center", "d-flex"].join(" ")}
            >
              <div className={["flex-column", "mb-5"].join(" ")}>
                <h3 className={["mb-3"].join(" ")}>Toggle and refresh</h3>
                <UnorderedList>
                  <ListItem>Quickly track vehicles</ListItem>
                  <ListItem>
                    Toggle dark mode for higher contrast, helps with glare.
                  </ListItem>
                </UnorderedList>
              </div>
            </Col>
          </Row>
          {/* Conclusion */}
          <Row className={["my-5", "pt-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              <h3 className={["mb-3"].join(" ")}>Conclusion</h3>
              <div
                className={[
                  "bg-gray",
                  "px-sm-5",
                  "px-3",
                  "py-5",
                  "border",
                  "g-rounded",
                ].join(" ")}
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
                  Improving ridership means improving rider confidence.
                  Simplifying the complicated needs of transit riders was the
                  motivation behind this experimental app. As with many projects
                  the heavy lifting is balancing between complexity and
                  efficiency, managing user expectations, leveraging available
                  data, considering the technologies involved and the available
                  resources to build. Still, that is where the fun is.
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
                  Next: More unique features
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
