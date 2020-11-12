import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "gatsby-image"
import ProjectHeader from "../components/ProjectHeader"
import NextContentPage from "../components/NextContentPage"
import { useStaticQuery, graphql } from "gatsby"

import ctFlickerWebm from "../images/ct/ct-flicker.webm"
import ctFlickerMp4 from "../images/ct/ct-flicker.mp4"

import ctLogoWordsWebm from "../images/ct/ct-logo-intowords.webm"
import ctLogoWordsMp4 from "../images/ct/ct-logo-intowords.mp4"

import ctRotationWebm from "../images/ct/ct-text-rotation.webm"
import ctRotationMp4 from "../images/ct/ct-text-rotation.mp4"

import ctPizzaWebm from "../images/ct/pizza-rotate.webm"
import ctPizzaMp4 from "../images/ct/pizza-rotate.mp4"

import ctLogoAnimate from "../images/ct-animation.gif"

const CascadiaThreads = () => {
  function captionText() {
    const classNames = ["small", "text-muted", "text-center", "my-4"].join(" ")
    return classNames
  }
  const data = useStaticQuery(graphql`
    query {
      ctLogo: file(relativePath: { eq: "ct-text-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctApparelTable: file(relativePath: { eq: "ct-apparelTable.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctWeWork: file(relativePath: { eq: "ct-wework.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctUserflow: file(relativePath: { eq: "ct-userflow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 555, maxHeight: 370) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctStoreList: file(relativePath: { eq: "ct-storelist.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctSlide1: file(relativePath: { eq: "ct-slide1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctSlide2: file(relativePath: { eq: "ct-slide2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctSlide3: file(relativePath: { eq: "ct-slide3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctSlide4: file(relativePath: { eq: "ct-slide4.jpg" }) {
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
        jobTitle="Design Lead"
        description="UX Design, Visual Design, Motion Graphics, Video/Content Production, Wordpress"
        impact="Cascadia Threads is a personal project that came about in 2015. It was a lifestyle brand and our main goal was to create a online store along with increasing awareness around climate change. Our appeal was to focus on meshing fun, urban, tech styles with a sustainable product."
        logo={data.ctLogo.childImageSharp.fluid}
        c1="#000"
        c2="#131313"
        c3="#fff"
        c4="#758591"
        bg="#000"
      />
      <Container>
        <Row>
          <Col className="py-5">
            <Image
              fluid={data.ctApparelTable.childImageSharp.fluid}
              className="rounded-lg"
            />
            <p className={captionText()}>
              Worked with the best in Portland.
              <a
                href="https://www.instagram.com/oregonscreen/"
                className="mx-2"
              >
                <span role="img" aria-label="Printer">
                  👕
                </span>{" "}
                @oregonscreen
              </a>
              <a href="https://www.instagram.com/blackprints/">
                <span role="img" aria-label="Photographer">
                  📸
                </span>{" "}
                @blackprints
              </a>
            </p>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col xs={{ span: 6 }}>
            <Image
              fluid={data.ctUserflow.childImageSharp.fluid}
              className="rounded-lg"
            />
            <p className={captionText()}>Oldest sketch I could pull together</p>
          </Col>
          <Col xs={{ span: 6 }}>
            <Image
              fluid={data.ctStoreList.childImageSharp.fluid}
              className="rounded-lg"
            />
            <p className={captionText()}>Early mockups</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              fluid={data.ctWeWork.childImageSharp.fluid}
              className="rounded-lg"
            />
            <p className={captionText()}>
              Thanks to{" "}
              <a href="https://www.instagram.com/wework/">
                <span role="img" aria-label="House">
                  🏛️
                </span>{" "}
                @WeWork
              </a>{" "}
              Custom House
            </p>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col xs={{ span: 6 }}>
            <Image
              fluid={data.ctSlide2.childImageSharp.fluid}
              style={{ borderRadius: "5px 0 0 0" }}
            />
          </Col>
          <Col xs={{ span: 6 }}>
            <Image
              fluid={data.ctSlide1.childImageSharp.fluid}
              style={{ borderRadius: "0 5px 0 0" }}
            />
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col xs={{ span: 6 }}>
            <Image
              fluid={data.ctSlide3.childImageSharp.fluid}
              style={{ borderRadius: "0 0 0 10px" }}
            />
          </Col>
          <Col xs={{ span: 6 }}>
            <Image
              fluid={data.ctSlide4.childImageSharp.fluid}
              style={{ borderRadius: "0 0 5px 0" }}
            />
          </Col>
        </Row>
        <Row id="animations">
          <Col>
            <p className={captionText()}>Design: Apparel / Motion</p>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col xs={{ span: 6 }}>
            <video
              loop
              muted
              autoPlay
              className={["w-100", "h-100", "d-block"].join(" ")}
              style={{ borderRadius: "10px 0 0 0" }}
            >
              <source src={ctFlickerWebm} type="video/webm" />
              <source src={ctFlickerMp4} type="video/mp4" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
          </Col>
          <Col xs={{ span: 6 }}>
            <video
              loop
              muted
              autoPlay
              className={["w-100", "h-100", "d-block"].join(" ")}
              style={{ borderRadius: "0 10px 0 0" }}
            >
              <source src={ctLogoWordsWebm} type="video/webm" />
              <source src={ctLogoWordsMp4} type="video/mp4" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col>
            <video
              loop
              muted
              autoPlay
              className={["w-100", "h-100", "d-block"].join(" ")}
              style={{ borderRadius: "0 0 0 10px" }}
            >
              <source src={ctRotationWebm} type="video/webm" />
              <source src={ctRotationMp4} type="video/mp4" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
          </Col>
          <Col>
            <video
              loop
              muted
              autoPlay
              className={["w-100", "h-100", "d-block"].join(" ")}
              style={{ borderRadius: "0 0 10px 0" }}
            >
              <source src={ctPizzaWebm} type="video/webm" />
              <source src={ctPizzaMp4} type="video/mp4" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={["text-center", "mt-5"].join(" ")}>
              Enjoy <a href="https://cascadiathreads.com">the shop</a>!
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: "#000" }} className="mt-5">
        <Container>
          <Row>
            <Col>
              <img
                src={ctLogoAnimate}
                alt="Cascadia Threads bumper"
                className={["img-fluid", "py-3"].join(" ")}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <NextContentPage title="About Noel" otherProject="/about" />
    </Layout>
  )
}

export default CascadiaThreads
