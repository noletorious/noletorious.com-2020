import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Scrollchor from "react-scrollchor"
import ReusableCard from "../components/ReuseableCard"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      noelFront: file(relativePath: { eq: "noel-trimet-square.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimet: file(relativePath: { eq: "trimet-front.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
      attensa: file(relativePath: { eq: "attensa-front.png" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
      cascadiathreads: file(relativePath: { eq: "ct-front.png" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
      hop: file(relativePath: { eq: "hopreader-front.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
      trimetArrivals: file(
        relativePath: { eq: "personal/trimetArrivals-front.jpg" }
      ) {
        childImageSharp {
          original {
            src
          }
        }
      }
      heyyy: file(relativePath: { eq: "personal/heyyy-front.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
      gMapsRedesign: file(
        relativePath: { eq: "personal/googleMapsRedesign.jpg" }
      ) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)

  const NoelImageWrap = styled.div`
    max-width: 125px;
    width: 125px;
    margin: 2em auto;
  `

  const trimetImage = data.trimet.childImageSharp.original.src
  const attensaImage = data.attensa.childImageSharp.original.src
  const cascadiaThreadsImage = data.cascadiathreads.childImageSharp.original.src
  const hopImage = data.hop.childImageSharp.original.src

  const trimet = {
    imgSrc: trimetImage,
    title: "TriMet",
    link: "/trimet",
  }
  const attensa = {
    imgSrc: attensaImage,
    title: "Attensa",
    link: "/attensa",
  }
  const cascadiathreads = {
    imgSrc: cascadiaThreadsImage,
    title: "Cascadia Threads",
    link: "/cascadiathreads",
  }
  const hop = {
    imgSrc: hopImage,
    title: "Hop Fastpass",
    link: "/hop",
  }

  // const theThemeState = useTheme()
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col>
            <NoelImageWrap>
              <Link to="/about">
                <Img
                  fluid={data.noelFront.childImageSharp.fluid}
                  className="rounded-circle"
                />
              </Link>
            </NoelImageWrap>
            <p className={["text-center", "h3"].join(" ")}>
              <span role="img" aria-label="Waive">
                👋
              </span>
            </p>
            <h1 className={["text-center", "h4"].join(" ")}>Hi, I'm Noel.</h1>
            <p className={["text-muted", "mt-2", "text-center"].join(" ")}>
              Product / Interaction / Motion Designer
            </p>
            <div className={["d-block", "text-center", "my-5"].join(" ")}>
              <Scrollchor
                to="#work"
                id="work"
                className={["text-center", "no-decoration"].join(" ")}
              >
                <FontAwesomeIcon icon={faLongArrowAltDown} size="2x" />
              </Scrollchor>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 6 }} md={{ span: 3 }} className="mb-4">
            <ReusableCard
              title={trimet.title}
              imgSrc={trimet.imgSrc}
              link={trimet.link}
            />
          </Col>
          <Col xs={{ span: 6 }} md={{ span: 3 }}>
            <ReusableCard
              title={hop.title}
              imgSrc={hop.imgSrc}
              link={hop.link}
            />
          </Col>
          <Col xs={{ span: 6 }} md={{ span: 3 }}>
            <ReusableCard
              title={attensa.title}
              imgSrc={attensa.imgSrc}
              link={attensa.link}
            />
          </Col>
          <Col xs={{ span: 6 }} md={{ span: 3 }} className="mb-4">
            <ReusableCard
              title={cascadiathreads.title}
              imgSrc={cascadiathreads.imgSrc}
              link={cascadiathreads.link}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
