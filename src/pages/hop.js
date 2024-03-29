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
import hopPlaidPantryWebm from "../images/hop-plaidpantry.webm"
import hopPlaidPantryMp4 from "../images/hop-plaidpantry.mp4"
import hop30secadWebm from "../images/hop-30secad.webm"
import hop30secadMp4 from "../images/hop-30secad.mp4"
import whatsMyFareMp4 from "../images/hop-whatsmyfare.mp4"
import hopGoogleVCGif from "../images/hop-googleVC.gif"
import hopLogoGif from "../images/hop-animation.gif"

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
        description="Hand model, video production, motion graphics, 2D animation, interaction design"
        impact="Implemented by TriMet, Hop Fastpass is the first contactless fare system in the United States. During Hop's initial launch in 2017, my role was to audit the design of the website and app and provide solutions for outstanding issues. Since then my responsibilities have expanded collaborating with engineers, marketers, videographers around video production, motion graphics, and the continuation of addressing any user experience issues."
        logo={data.hopLogo.childImageSharp.fluid}
        c1="#2a0486"
        c2="#fecb38"
        c3="#ff6b00"
        c4="#8dc640"
        bg="#2a0486"
      />
      <Container>
        <Row>
          <Col className="my-5">
            <Image
              fluid={data.hopTap.childImageSharp.fluid}
              className={["rounded-lg"].join(" ")}
            />
            <p className={captionText()} id="whatsmyfare">
              Go-to hand model.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 6 }}>
            <Image
              fluid={data.hopWhatsMyFare.childImageSharp.fluid}
              className="rounded-lg"
            />
            <p className={captionText()}>
              Example Problem: With the many options, riders were unsure on what
              fare type to use.
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
                Solution: Create a responsive{" "}
                <a
                  href="https://trimet.org/waystopay/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  short and friendly questionnare
                </a>
              </em>{" "}
              using{" "}
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsbyjs
              </a>
              .
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
              Collaborated directly with Apple's Marketing team promoting{" "}
              <a
                href="https://trimet.org/applepay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual Card + ApplePay
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
          <Col className="py-5" xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
            <Image
              fluid={data.hopWebsite.childImageSharp.fluid}
              className="rounded-lg"
            />
            <p className={captionText()}>
              Work together with our engineering team on{" "}
              <a
                href="//myhopcard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                myhopcard.com
              </a>
              .
            </p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <Container>
        <Row id="hopanimations">
          <Col sm={{ span: 6 }}>
            <video
              loop
              muted
              autoPlay
              className={["w-100", "d-block", "rounded-lg"].join(" ")}
            >
              <source src={hopPlaidPantryMp4} type="video/mp4" />
              <source src={hopPlaidPantryWebm} type="video/webm" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
            <p className={captionText()}>
              Responsible for creating{" "}
              <a
                href="https://dribbble.com/shots/11102697-Hop-Fastpass-Where-to-get-a-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                fun animations
              </a>{" "}
              for marketing campaigns.
            </p>
          </Col>
          <Col sm={{ span: 6 }}>
            <video
              loop
              muted
              autoPlay
              className={["w-100", "d-block", "rounded-lg"].join(" ")}
            >
              <source src={hop30secadMp4} type="video/mp4" />
              <source src={hop30secadWebm} type="video/webm" />
              <span className="text-light">
                Your browser does not support HTML5 video.
              </span>
            </video>
            <p className={captionText()}>
              Created the{" "}
              <a
                href="https://youtu.be/K0rsCD-jTBk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hop Fastpass launch animation
              </a>{" "}
              ads.
            </p>
          </Col>
          <Col sm={{ span: 12 }} className="mb-5"></Col>
        </Row>
      </Container>
      <Container style={{ backgroundColor: "#0f0f0f" }} fluid id="vcvalidator">
        <Row>
          <Col
            xs={{ span: 4, offset: 4 }}
            sm={{ span: 2, offset: 5 }}
            className="mt-4"
          >
            <img
              src={hopGoogleVCGif}
              alt="Virtual Card Animation Validator"
              className={["img-fluid", "mt-4"].join(" ")}
            />
          </Col>
          <Col xs={{ span: 12 }} className="mb-5">
            <p className={captionText()}>
              Added an extra layer of security by animating the Hopster mascots
              within app's{" "}
              <a
                href="https://myhopcard.com/home/pay-with-your-phone"
                target="_blank"
                rel="noopener noreferrer"
              >
                virtual card
              </a>{" "}
              validator.
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
      <NextContentPage title="Attensa" otherProject="/attensa" />
    </Layout>
  )
}

export default Hop
