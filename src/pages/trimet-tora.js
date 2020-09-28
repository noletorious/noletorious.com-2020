import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import { Link } from "gatsby"
import useDarkMode from "use-dark-mode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUsersCog,
  faUserCheck,
  faUserShield,
  faUserTimes,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import NextContentPage from "../components/NextContentPage"

const TriMetArrivals = () => {
  const darkMode = useDarkMode(true)
  useEffect(() => {
    console.log("useEffect")
    darkMode.disable()
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
      toraHome: file(relativePath: { eq: "tora/tora-home.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      currentHome: file(relativePath: { eq: "tora/trimet-current-home.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimet1997: file(relativePath: { eq: "tora/trimet-1997.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimet1998: file(relativePath: { eq: "tora/trimet-1998.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimet2001: file(relativePath: { eq: "tora/trimet-2001.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimet2004: file(relativePath: { eq: "tora/trimet-2004.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimet2006: file(relativePath: { eq: "tora/trimet-2006.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimet2009: file(relativePath: { eq: "tora/trimet-2009.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimet2012: file(relativePath: { eq: "tora/trimet-2012.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimet2015: file(relativePath: { eq: "tora/trimet-2015.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetProcess: file(relativePath: { eq: "tora/trimet-process.jpg" }) {
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
  const RosetteImageWrap = styled.div`
    display: block;
    margin: 0 auto;
    width: 100px;
    padding-bottom: 1em;
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
        {/* Intro */}
        <Container className="py-5">
          <Row>
            <Col className={["d-flex", "flex-column", "text-center"].join(" ")}>
              <RosetteImageWrap>
                <Image
                  fluid={data.rosette.childImageSharp.fluid}
                  className={["d-block", "mx-auto"].join(" ")}
                />
              </RosetteImageWrap>
              <h1>TriMet.org Re-Architecture</h1>
              <p>
                Enhancing the mobile and desktop experience for Portland-metro
                riders.
              </p>
            </Col>
          </Row>
        </Container>
        {/* Intro devices */}
        <Container fluid>
          <Row>
            <Col xs={{ span: 6 }}>
              <Image
                fluid={data.currentHome.childImageSharp.fluid}
                className="rounded-lg"
              />
            </Col>
            <Col xs={{ span: 6 }}>
              <Image
                fluid={data.toraHome.childImageSharp.fluid}
                className="rounded-lg"
              />
            </Col>
          </Row>
        </Container>
        {/* Overview */}
        <Container>
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
              <h3 className={["mb-3"].join(" ")}>Overview for context</h3>
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
                  History
                </h3>
                <p className={["pt-5", "pb-3", "text-muted"].join(" ")}>
                  The website has gone through major changes and it has been
                  based largely on rider-center design.{" "}
                  <a
                    href="https://trimet.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TriMet.org
                  </a>{" "}
                  has gone through a series of updates over the years. Many
                  people around the Portland Metro area heavily rely on TriMet’s
                  data to navigate and get around the city.
                </p>
                <p>
                  Historically, TriMet has a solid reputation as a transit
                  agency that openly works with other agencies around harnessing
                  transit data digitally
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* trimet timeline */}
        <Container fluid>
          <Row className={["mb-5"].join(" ")}>
            <Col>
              <Image
                fluid={data.trimet1997.childImageSharp.fluid}
                className="rounded-lg"
              />
              <p
                className={["text-muted", "text-small", "text-center"].join(
                  " "
                )}
              >
                1997
              </p>
            </Col>
            <Col>
              <Image
                fluid={data.trimet1998.childImageSharp.fluid}
                className="rounded-lg"
              />
              <p
                className={["text-muted", "text-small", "text-center"].join(
                  " "
                )}
              >
                1998
              </p>
            </Col>
            <Col>
              <Image
                fluid={data.trimet2001.childImageSharp.fluid}
                className="rounded-lg"
              />
              <p
                className={["text-muted", "text-small", "text-center"].join(
                  " "
                )}
              >
                2001
              </p>
            </Col>
            <Col>
              <Image
                fluid={data.trimet2004.childImageSharp.fluid}
                className="rounded-lg"
              />
              <p
                className={["text-muted", "text-small", "text-center"].join(
                  " "
                )}
              >
                2004
              </p>
            </Col>
          </Row>
          <Row className={["mb-5"].join(" ")}>
            <Col>
              <Image
                fluid={data.trimet2006.childImageSharp.fluid}
                className="rounded-lg"
              />
              <p
                className={["text-muted", "text-small", "text-center"].join(
                  " "
                )}
              >
                2006
              </p>
            </Col>
            <Col>
              <Image
                fluid={data.trimet2009.childImageSharp.fluid}
                className="rounded-lg"
              />
              <p
                className={["text-muted", "text-small", "text-center"].join(
                  " "
                )}
              >
                2009
              </p>
            </Col>
            <Col>
              <Image
                fluid={data.trimet2012.childImageSharp.fluid}
                className="rounded-lg"
              />
              <p
                className={["text-muted", "text-small", "text-center"].join(
                  " "
                )}
              >
                2012
              </p>
            </Col>
            <Col>
              <Image
                fluid={data.trimet2015.childImageSharp.fluid}
                className="rounded-lg"
              />
              <p
                className={["text-muted", "text-small", "text-center"].join(
                  " "
                )}
              >
                2015
              </p>
            </Col>
          </Row>
        </Container>
        {/* Collaborating Partners*/}
        <Container>
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
              <div
                className={[
                  "bg-gray",
                  "pt-5",
                  "px-sm-5",
                  "px-3",
                  "pb-4",
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
                  Collaborating Partners
                </h3>
                <p className={["text-muted"].join(" ")}>
                  This re-architecture runs in parallel with the{" "}
                  <a
                    href="https://OpenTripPlanner.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OpenTripPlanner
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.openstreetmap.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OpenStreetMap
                  </a>{" "}
                  to push the multimodal effort, unifying the trip planner data
                  architecture in the United States. The OTP follows the{" "}
                  <a
                    href="https://gtfs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    General Transit Feed Specification
                  </a>{" "}
                  that was also lead by TriMet and Google's GIS team.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Project business goals*/}
        <Container>
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
              <div
                className={[
                  "bg-gray",
                  "pt-5",
                  "px-sm-5",
                  "px-3",
                  "pb-4",
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
                  Project's Business Goals
                </h3>
                <p className={["text-muted"].join(" ")}>
                  The goal of this project has the future and riders in mind.
                </p>
                <ol className={["text-muted"].join(" ")}>
                  <li className="mb-1">
                    Upgrade current trip tools usability based on rider needs on
                    trimet.org leveraging trimet.org data and OTP mod
                    techonology.
                  </li>
                  <li className="mb-1">
                    Enhance underlying technology in order to continuously
                    scale.
                  </li>
                  <li className="mb-1">
                    Encourage users to take multimodal trips.
                  </li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Relevant Metrics */}
        <Container>
          <Row className={["mb-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
              <h3 className={["mb-3"].join(" ")}>Process</h3>
              <div
                className={[
                  "bg-gray",
                  "pt-5",
                  "px-sm-5",
                  "px-3",
                  "pb-0",
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
                  Research
                </h3>
                <Image
                  fluid={data.trimetProcess.childImageSharp.fluid}
                  className="rounded-lg"
                />
                <p className={["mb-5", "mt-3", "text-muted"].join(" ")}>
                  We have a dedicated team that run rider surveys and analyzes
                  the data. They regularly distribute surveys for feedback in
                  order to make sense of the rider experience and sentiment.
                </p>
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
                <p className={["my-4", "pb-4", "text-muted"].join(" ")}>
                  Our Audience Segmentation Survey Research Report the team
                  helped us identified 4 main rider personas. Generally everyone
                  falls in to one of these categories:
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
                <h3
                  className={[
                    "my-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Rider(user) Usage
                </h3>
                <Container>
                  <Row className={["py-3"].join(" ")}>
                    <Col
                      className={[
                        "text-center",
                        "border",
                        "rounded",
                        "py-3",
                        "mx-1",
                      ].join(" ")}
                    >
                      <h4 className={["mb-0", "bold"].join(" ")}>8 million </h4>
                      <p className={["mb-0", "bold"].join(" ")}>
                        pageviews/month
                      </p>
                    </Col>
                    <Col
                      className={[
                        "text-center",
                        "border",
                        "rounded",
                        "py-3",
                        "mx-1",
                      ].join(" ")}
                    >
                      <h4 className={["mb-0", "bold"].join(" ")}>95%</h4>
                      <p className={["mb-0", "bold"].join(" ")}>
                        come for trip tools
                      </p>
                    </Col>
                    <Col
                      className={[
                        "text-center",
                        "border",
                        "rounded",
                        "py-3",
                        "mx-1",
                      ].join(" ")}
                    >
                      <h4 className={["mb-0", "bold"].join(" ")}>70%</h4>
                      <p className={["mb-0", "bold"].join(" ")}>
                        access through mobile
                      </p>
                    </Col>
                  </Row>
                </Container>
                <Row className={["my-5"].join(" ")}>
                  <Col>
                    <h3
                      className={[
                        "mb-3",
                        "small",
                        "font-weight-bold",
                        "text-uppercase",
                      ].join(" ")}
                    >
                      Top Rider Tasks
                    </h3>
                    <OrderedList className="mb-3">
                      <ListItem>
                        Find out exactly when my bus or train is coming
                      </ListItem>
                      <ListItem>
                        See nearby transit service at my current location
                      </ListItem>
                      <ListItem>
                        Customize my trip itinerary (next/previous trip, etc.)
                      </ListItem>
                      <ListItem>
                        Get info for my entire trip (connections, alerts, etc.)
                      </ListItem>
                      <ListItem>Quickly and easily repeat my trips</ListItem>
                    </OrderedList>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Process continued... */}
        <Container>
          <Row className={["my-5", "pt-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
              <h3 className={["mb-3"].join(" ")}>Process continued...</h3>
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
                  Competitive Analysis
                </h3>
                <p className="mb-4">
                  Existing products like Uber, Google Maps, Lyft, TransitApp,
                  come with an experience that a lot of people are used to. What
                  we wanted to do was make sure what we build had a balance of
                  leveraging experiences from other products with something very
                  unique to TriMet. That uniqueness was our data and the fact
                  that we know exactly which tools most users spend the most
                  time on. This greatly influenced how we distilled what was
                  important for the user, it is easy to want to just give the
                  user everything (Power user problem).{" "}
                </p>
                <p className={["text-muted", "small", "mb-5"].join(" ")}>
                  [Image of UBER, LYFT, Google Maps, TransitApp, MoovitApp, and
                  more]
                </p>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Application feature audit
                </h3>
                <p className="mb-4">
                  Next we needed to do our due diligence and consult the data
                  once more. I did an audit to make sure the data points we
                  wanted to know about the current TriMet.org Trip Tools were
                  accounted for. A granular detail would be setting up event
                  listeners from the old to the new app and making sure that
                  those were translated correctly. Event listeners like clicking
                  on the drop down menu, we want to know if people are doing
                  that at the Stop level.
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
                <h3
                  className={[
                    "mt-5",
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Prototype and iterate on main flows
                </h3>
                <p className="mb-4">
                  Next I started the processes by mapping out the main user
                  flows. This was essential because the app needed to be fluid
                  in the sense where it very much reseambled a native app, from
                  navigating to one state to another easily, to mobile versus
                  desktop responsiveness.{" "}
                </p>
                <p className={["text-muted", "small", "mb-5"].join(" ")}>
                  [Gif of prototype animations]
                </p>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Capturing data
                </h3>
                <p className="mb-4">
                  We upgraded our Google Analytics data by leveraging Google Tag
                  Manager and having a handle on editing and applying new event
                  listeners where needed. The requirement of having these
                  configurable by the UX team was taken into consideration when
                  it was built.{" "}
                </p>
                <p className={["text-muted", "small", "mb-5"].join(" ")}>
                  [Image of eventListeners list and Google Tag Manager]
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* My role overtime, the current state and future */}
        <Container>
          <Row className={["my-5", "pt-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
              <h3 className={["mb-3"].join(" ")}>My role overtime</h3>
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
                  The current state and future
                </h3>

                <UnorderedList className="mb-5">
                  <ListItem>
                    As the projects lead UX Designer and Front-end Developer, I
                    was directly involved with the design direction of TriMet’s
                    mod.
                  </ListItem>
                  <ListItem>
                    Initially, as the designer, I researched made sense of best
                    practices for map based interactions.
                  </ListItem>
                  <ListItem>
                    Then moved on to considering design requirements such as
                    integrating trip tools and look and feel
                  </ListItem>
                  <ListItem>
                    Once we started developing, I moved on to being a front-end
                    developer working with senior developers working on only on
                    front-end components.
                  </ListItem>
                  <ListItem>
                    Now we are moving in to internal testing and planning the
                    next phases and rolling out MVP at the right time.{" "}
                  </ListItem>
                </UnorderedList>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Impact
                </h3>
                <UnorderedList className="mb-5">
                  <ListItem>
                    Along with affecting the front page user experience for
                    riders on trimet.org dramatically, the designs I created for
                    TriMet’s OTP mod will lead the way for the latest OTP
                    feature updates in the United States.
                  </ListItem>
                  <ListItem>
                    Stakeholder and cross department trust. Prior to me joining
                    the team, were business some relationships that left certain
                    projects in a contentious note which I personally filled by
                    being the necessary team member that understood the
                    technology and design.
                  </ListItem>
                </UnorderedList>
                <h3
                  className={[
                    "mb-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Challenges
                </h3>
                <UnorderedList>
                  <ListItem>Feature creeping out of scope</ListItem>
                  <ListItem>
                    Aligning prioritization of UX throughout the agency,
                    planting idea seeds to presenting ideas
                  </ListItem>
                  <ListItem>Collaborating with IT and gaining trust</ListItem>
                  <ListItem>
                    Managing stakeholder expectations and timeframes
                  </ListItem>
                  <ListItem>
                    Solving for hard use cases that are affected by outside
                    policies like the ever changing scooter and ride hail data
                    policies; and many more.
                  </ListItem>
                </UnorderedList>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          {/* Conclusion */}
          <Row className={["my-5", "pt-5"].join(" ")}>
            <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
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
                <p className={["text-muted", "mb-4"].join(" ")}>
                  Improving ridership means improving rider confidence. This
                  project has many moving peices, many stakeholders involved and
                  we are far from the end. However, I love the complexity and
                  progressing.
                </p>
                <h3
                  className={[
                    "my-3",
                    "small",
                    "font-weight-bold",
                    "text-uppercase",
                  ].join(" ")}
                >
                  Experimental
                </h3>
                <div className={["pb-0", "text-muted"].join(" ")}>
                  <p>
                    If you haven't yet, check out my{" "}
                    <Link to="/trimet-arrivals">experimental app</Link> where I
                    create a native app prototype extending TriMet's Redesign
                    with some new ideas.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={["mb-5", "py-5"].join(" ")}>
            <Col xs={{ span: 12 }}>
              <div className={["d-block", "text-center"].join(" ")}>
                <ToProtoButton
                  type="button"
                  as="a"
                  className={["btn", "btn-lg"].join(" ")}
                  href="https://trimet.org/newplanner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TriMet Re-Architecture Project Page
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
