import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
// import Image from "gatsby-image"
import ProjectHeader from "../components/ProjectHeader"
import NextContentPage from "../components/NextContentPage"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import whatsMyFareMp4 from "../images/hop-whatsmyfare.mp4"
import hopGoogleVCGif from "../images/hop-googleVC.gif"
import hopLogoGif from "../images/hop-animation.gif"
import hopWhereTo from "../images/hop-wheretoget.gif"

const Hop = () => {
  function captionText() {
    const classNames = ["small", "text-muted", "text-center", "my-4"].join(" ")
    return classNames
  }
  const data = useStaticQuery(graphql`
    query {
      hopLogo: file(relativePath: { eq: "hop-fastpass-circle.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hopTap: file(relativePath: { eq: "hop-tap.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hopWhatsMyFare: file(relativePath: { eq: "hop-whatsmyfare.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1060) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hopVCTap: file(relativePath: { eq: "hop-vc-tap.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hopWebsite: file(relativePath: { eq: "myhopcard.com.png" }) {
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
        jobTitle="Web/Motion Designer"
        description="Hand model, video production, motion graphics, 2D animation, UI Design"
        logo={data.hopLogo.childImageSharp.fluid}
        c1="#2a0486"
        c2="#fecb38"
        c3="#ff6b00"
        c4="#8dc640"
        bg="#2a0486"
      />
      <Container>
        <Row>
          <Col>
            <Image
              fluid={data.hopTap.childImageSharp.fluid}
              className={["my-5", "rounded-lg"].join(" ")}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 6 }}>
            <Image
              fluid={data.hopWhatsMyFare.childImageSharp.fluid}
              className="rounded-lg"
            />
            <p className={captionText()}>
              Problem: Not sure what fare type to use
            </p>
          </Col>
          <Col xs={{ span: 6 }}>
            <video
              loop
              muted
              autoPlay
              className={["w-100", "d-block", "rounded-lg"].join(" ")}
            >
              {/* <source src={ctPizzaWebm} type="video/webm" /> */}
              <source src={whatsMyFareMp4} type="video/mp4" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
            <p className={captionText()}>
              <em>
                Result:{" "}
                <a
                  href="https://trimet.org/waystopay/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Short and friendly questionnare
                </a>{" "}
              </em>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              fluid={data.hopVCTap.childImageSharp.fluid}
              className={["mt-5", "rounded-lg"].join(" ")}
            />
            <p className={captionText()}>
              Collaborated with Apple's Marketing promoting{" "}
              <a
                href="https://trimet.org/applepay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual Card on iOS
              </a>{" "}
              and{" "}
              <a
                href="https://youtu.be/44fJcKEdTQs"
                target="_blank"
                rel="noopener noreferrer"
              >
                produced how-to videos
              </a>
              .
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
            <Image
              fluid={data.hopWebsite.childImageSharp.fluid}
              className="rounded-lg"
            />
            <p className={captionText()}>
              Updating the marketing pages of{" "}
              <a
                href="//myhopcard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                myhopcard.com
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <img
              src={hopWhereTo}
              alt="Fun Animations"
              className={["img-fluid", "py-4", "rounded-lg"].join(" ")}
            />
            <p className={captionText()}>Fun Animation Series</p>
          </Col>
        </Row>
      </Container>
      <Container style={{ backgroundColor: "#0f0f0f" }} fluid>
        <Row>
          <Col
            xs={{ span: 4, offset: 4 }}
            sm={{ span: 2, offset: 5 }}
            className="my-4"
          >
            <img
              src={hopGoogleVCGif}
              alt="Virtual Card Animation Validator"
              className={["img-fluid", "mt-4"].join(" ")}
            />
            <p className={captionText()}>
              <a
                href="https://myhopcard.com/home/pay-with-your-phone"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual Card
              </a>{" "}
              Animation Validator
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: "#000" }}>
        <Container className={["py-5"].join(" ")}>
          <Row>
            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 8, offset: 2 }}
              className={["py-5"].join(" ")}
            >
              <img
                src={hopLogoGif}
                alt="Hop Fastpass bumper"
                className={["img-fluid", "py-5"].join(" ")}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <NextContentPage title="TriMet" otherProject="/trimet" />
    </Layout>
  )
}

export default Hop
