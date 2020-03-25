import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "gatsby-image"
import NextContentPage from "../components/NextContentPage"
import ProjectHeader from "../components/ProjectHeader"
// import styled from "styled-components"
// import HomeAnimationWebm from "../images/trimet-home-animation.webm"
// import HomeAnimationMp4 from "../images/trimet-home-animation.mp4"
import GoogleFlygGif from "../images/trimet-googlefly.gif"
import TriMetLogoGif from "../images/trimet-logo.gif"
import pocCSmp4 from "../images/poc-animations/trimet-customerservice.mp4"
import pocCSwebm from "../images/poc-animations/trimet-customerservice.webm"
import pocRWmp4 from "../images/poc-animations/trimet-riderrewards.mp4"
import pocRWwebm from "../images/poc-animations/trimet-riderrewards.webm"
import pocTTmp4 from "../images/poc-animations/trimet-triptools.mp4"
import pocTTwebm from "../images/poc-animations/trimet-triptools.webm"
import pocUAmp4 from "../images/poc-animations/trimet-useraccounts.mp4"
import pocUAwebm from "../images/poc-animations/trimet-useraccounts.webm"

const TriMet = () => {
  const data = useStaticQuery(graphql`
    query {
      trimetPDXResults: file(relativePath: { eq: "trimet-pdxresult.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetStyleGuide: file(relativePath: { eq: "trimet-styleguide.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetPDXScreens: file(relativePath: { eq: "trimet-pdxscreens.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetInsta: file(relativePath: { eq: "trimet-insta.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 538, maxHeight: 389) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetWhite: file(relativePath: { eq: "trimet-white.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetOTPPreview: file(relativePath: { eq: "trimet-otp-preview.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetNewTT: file(relativePath: { eq: "trimet-new-tt.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetOldTT: file(relativePath: { eq: "trimet-old-tt.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetBlog: file(relativePath: { eq: "trimet-blogcomparison.png" }) {
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
      <ProjectHeader
        logo={data.trimetWhite.childImageSharp.fluid}
        description="UX Design, Visual Design, Motion Graphics, Video/Content Production,
      Animation Storytelling, React Front-end Development, Photography"
        jobTitle="Web Designer/Developer"
        c1="#084c8d"
        c2="#d1441e"
        c3="#f7e886"
        c4="#6db33f"
        c5="#d3e9ff"
        bg="#084c8d"
      />
      <Container className="my-5">
        <Row>
          <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
            <Image
              fluid={data.trimetStyleGuide.childImageSharp.fluid}
              className="rounded"
            />
            <p
              className={[
                "small",
                "text-muted",
                "mt-2",
                "mb-5",
                "text-center",
              ].join(" ")}
            >
              Internal{" "}
              <a
                href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/grid"
                target="_blank"
                rel="noopener noreferrer"
              >
                style guides
              </a>
              .
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col xs={{ span: 6 }}>
                <Image
                  fluid={data.trimetInsta.childImageSharp.fluid}
                  className="rounded"
                />
                <p
                  className={[
                    "small",
                    "text-muted",
                    "mt-2",
                    "text-center",
                  ].join(" ")}
                >
                  Photo I'm most proud of.{" "}
                  <a
                    href="https://www.instagram.com/p/ByS8gYEB-bT/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @trimet
                  </a>
                </p>
              </Col>
              <Col xs={{ span: 6 }}>
                <img
                  src={GoogleFlygGif}
                  alt="Working with Google Earth and AE"
                  className={["img-fluid", "rounded"].join(" ")}
                />
                <p
                  className={[
                    "small",
                    "text-muted",
                    "mt-2",
                    "mb-5",
                    "text-center",
                  ].join(" ")}
                >
                  TriMet/Google Earth{" "}
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=BO72XAPARzM&list=PLtJW_Q-z9fw8Q2b5tdBReibFKAVfOJEy6"
                    rel="noopener noreferrer"
                  >
                    Flythroughs
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} class="my-5">
            <Image
              fluid={data.trimetBlog.childImageSharp.fluid}
              className="rounded-lg"
            />
            <p
              className={["small", "text-muted", "mt-2", "text-center"].join(
                " "
              )}
            >
              2019 Redesign{" "}
              <a
                href="//blog.trimet.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 6, offset: 3 }}
            className="my-5"
          >
            <Image fluid={data.trimetOTPPreview.childImageSharp.fluid} />
            <p
              className={[
                "small",
                "text-muted",
                "text-center",
                "mt-2",
                "mb-5",
              ].join(" ")}
            >
              Front-end Developer for{" "}
              <a
                href="https://trimet.org/newplanner/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TriMet.org Redesign
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="my-5">
            <Row>
              {/* PDX Screens */}
              <Col xs={{ span: 9 }} sm={{ span: 8 }}>
                <Image fluid={data.trimetPDXScreens.childImageSharp.fluid} />
              </Col>
              <Col xs={{ span: 3 }} sm={{ span: 4 }}>
                <Image
                  fluid={data.trimetPDXResults.childImageSharp.fluid}
                  className="rounded-lg"
                />
                <p
                  className={[
                    "small",
                    "text-muted",
                    "text-center",
                    "mt-2",
                    "mb-5",
                  ].join(" ")}
                >
                  Result
                </p>
              </Col>
              <Col>
                <p
                  className={[
                    "small",
                    "text-muted",
                    "text-center",
                    "mt-2",
                    "mb-5",
                  ].join(" ")}
                >
                  Collaborated with the Port of Portland / Designed and
                  developed MAX Arrival Screens
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* New Transit Tracker */}
        <Row>
          <Col xs={{ span: 12 }} sm={{ span: 5 }}>
            <Image
              fluid={data.trimetOldTT.childImageSharp.fluid}
              className="rounded"
            />
            <p
              className={[
                "small",
                "text-muted",
                "text-center",
                "mt-2",
                "mb-4",
              ].join(" ")}
            >
              Current Design
            </p>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 2 }}>
            <p
              className={[
                "small",
                "text-muted",
                "text-center",
                "mb-4",
                "mt-sm-5",
              ].join(" ")}
            >
              On-site Transit Tracker
            </p>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }}>
            <Image
              fluid={data.trimetNewTT.childImageSharp.fluid}
              className="rounded"
            />
            <p
              className={[
                "small",
                "text-muted",
                "text-center",
                "mt-2",
                "mb-5",
              ].join(" ")}
            >
              Redesign
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="bg-white" fluid>
        {/* Proof of concept App animations */}
        <Row noGutters={true}>
          <Col xs={{ span: 6 }} className="border-bottom">
            <video
              loop
              muted
              autoPlay
              className={["w-100", "h-100", "d-block"].join(" ")}
            >
              <source src={pocCSwebm} type="video/webm" />
              <source src={pocCSmp4} type="video/mp4" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
          </Col>
          <Col
            xs={{ span: 6 }}
            className={["border-left", "border-bottom"].join(" ")}
          >
            <video
              loop
              muted
              autoPlay
              className={["w-100", "h-100", "d-block"].join(" ")}
            >
              <source src={pocRWwebm} type="video/webm" />
              <source src={pocRWmp4} type="video/mp4" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
          </Col>
        </Row>
        <Row noGutters={true} className={["d-block", "bg-white"].join(" ")}>
          <Col className={[].join(" ")}>
            <p
              style={{ marginTop: "-13px" }}
              className={["text-center", "text-muted", "mb-0"].join(" ")}
            >
              <span
                className={[
                  "text-center",
                  "d-inline-block",
                  "mx-auto",
                  "border",
                  "bg-white",
                  "px-3",
                ].join(" ")}
              >
                Proof of concept microinteractions.
              </span>
            </p>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col xs={{ span: 6 }} className={["border-bottom"].join(" ")}>
            <video
              loop
              muted
              autoPlay
              className={["w-100", "h-100", "d-block"].join(" ")}
            >
              <source src={pocTTwebm} type="video/webm" />
              <source src={pocTTmp4} type="video/mp4" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
          </Col>
          <Col
            xs={{ span: 6 }}
            className={["border-left", "border-bottom"].join(" ")}
          >
            <video
              loop
              muted
              autoPlay
              className={["w-100", "h-100", "d-block"].join(" ")}
            >
              <source src={pocUAwebm} type="video/webm" />
              <source src={pocUAmp4} type="video/mp4" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
          </Col>
        </Row>
      </Container>
      <Container className={["bg-white"].join(" ")} fluid>
        <Row noGutters={true} className="border-bottom">
          <Col xs={{ span: 8, offset: 2 }}>
            <img
              src={TriMetLogoGif}
              alt="TriMet Bumper"
              className={["img-fluid", "py-3"].join(" ")}
            />
          </Col>
        </Row>
      </Container>
      <NextContentPage otherProject="/attensa" title="Attensa" />
    </Layout>
  )
}

export default TriMet
