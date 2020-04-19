import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"

const TriMetArrivals = () => {
  const data = useStaticQuery(graphql`
    query {
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
      </Container>
    </Layout>
  )
}

export default TriMetArrivals
