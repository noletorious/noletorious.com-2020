import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
// import Image from "gatsby-image"
import ProjectHeader from "../components/ProjectHeader"
import NextContentPage from "../components/NextContentPage"
import { useStaticQuery, graphql } from "gatsby"

const Hop = () => {
  const data = useStaticQuery(graphql`
    query {
      hopLogo: file(relativePath: { eq: "hop-fastpass-circle.png" }) {
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
        jobTitle="Designer"
        description="UX Design, Visual Design, Motion Graphics, Video/Content Production, Photography, Wordpress"
        logo={data.hopLogo.childImageSharp.fluid}
        c1="#000"
        c2="#131313"
        c3="#fff"
        c4="#758591"
        bg="#000"
      />
      <Container>
        <Row>
          <Col>{/* <Image fluid="" /> */}</Col>
        </Row>
      </Container>
      <NextContentPage />
    </Layout>
  )
}

export default Hop
