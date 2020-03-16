import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "gatsby-image"
import ProjectHeader from "../components/ProjectHeader"
import attensaLogoGif from "../images/attensa-animation.gif"
import NextContentPage from "../components/NextContentPage"

const Attensa = () => {
  const data = useStaticQuery(graphql`
    query {
      attensaLogo: file(relativePath: { eq: "attensa-white.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaShoulder: file(relativePath: { eq: "attensa-shoulder.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaSilos: file(relativePath: { eq: "attensa-silos.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaSolOne: file(relativePath: { eq: "attensa-solOne.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaSolTwo: file(relativePath: { eq: "attensa-solTwo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaTopicView: file(relativePath: { eq: "attensa-topicView.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaMobLogin: file(relativePath: { eq: "attensa-mobLogin.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaMobMyTopics: file(
        relativePath: { eq: "attensa-mobMyTopics.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaMobReadView: file(
        relativePath: { eq: "attensa-mobReadView.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaMobTopicView: file(
        relativePath: { eq: "attensa-mobTopicView.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaSketch: file(relativePath: { eq: "attensa-sketch.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaLP: file(relativePath: { eq: "attensa-LP.png" }) {
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
        jobTitle="UI Visual Designer"
        description="Product Design, UX/I Design, Visual Design, Branding, Infographics, and Content Marketing"
        logo={data.attensaLogo.childImageSharp.fluid}
        c1="#fff"
        c2="#f78f1e"
        c3="#1d73be"
        c4="#263239"
        c5="#758591"
        bg="#131313"
      />
      <Container fluid style={{ backgroundColor: "#212121" }}>
        <Container>
          <Row>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
              {/* <Image fluid={data.attensaShoulder.childImageSharp.fluid} /> */}
              <Image fluid={data.attensaSilos.childImageSharp.fluid} />
              <Image fluid={data.attensaSolOne.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col xs={{ span: 12 }} sm={{ span: 8, offset: 2 }}>
            <Image fluid={data.attensaSolTwo.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }}>
            <p
              className={[
                "small",
                "text-muted",
                "mt-5",
                "mb-2",
                "text-center",
              ].join(" ")}
            >
              Topic View
            </p>
            <Image
              style={{ zIndex: "1" }}
              fluid={data.attensaTopicView.childImageSharp.fluid}
              className={["rounded-lg", "mt-3", "border"].join(" ")}
            />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "-15em" }} fluid>
        <Row>
          <Col>
            <Image
              fluid={data.attensaShoulder.childImageSharp.fluid}
              className={["rounded-lg", "mb-3", "border"].join(" ")}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="my-5 py-5">
          <Col xs={{ span: 6 }} sm={{ span: 3 }}>
            <Image
              fluid={data.attensaMobLogin.childImageSharp.fluid}
              className={["rounded-lg", "border"].join(" ")}
            />
          </Col>
          <Col xs={{ span: 6 }} sm={{ span: 3 }}>
            <Image
              fluid={data.attensaMobMyTopics.childImageSharp.fluid}
              className={["rounded-lg", "border"].join(" ")}
            />
          </Col>
          <Col xs={{ span: 6 }} sm={{ span: 3 }}>
            <Image
              fluid={data.attensaMobReadView.childImageSharp.fluid}
              className={["rounded-lg", "border"].join(" ")}
            />
          </Col>
          <Col xs={{ span: 6 }} sm={{ span: 3 }}>
            <Image
              fluid={data.attensaMobTopicView.childImageSharp.fluid}
              className={["rounded-lg", "border"].join(" ")}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={{ span: 12 }}>
            <Image fluid={data.attensaSketch.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
      <Container style={{ backgroundColor: "#323232" }} fluid>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
            {" "}
            <img
              src={attensaLogoGif}
              alt="Attensa logo"
              className={[
                "img-fluid",
                "rounded",
                "mx-auto",
                "d-block",
                "p-5",
              ].join(" ")}
            />
          </Col>
        </Row>
      </Container>
      <NextContentPage
        title="Cascadia threads"
        otherProject="/cascadiathreads"
      />
    </Layout>
  )
}

export default Attensa
