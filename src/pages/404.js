import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import NextContentPage from "../components/NextContentPage"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Row>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 8, offset: 2 }}
          className={["p-5", "my-5", "border", "rounded-lg"].join(" ")}
        >
          {" "}
          <h1>404</h1>
          <p>
            You just hit a route that doesn&#39;t exist... the sadness. Try the
            links below...
          </p>
        </Col>
      </Row>
    </Container>

    <NextContentPage
      title="TriMet Experimental app"
      otherProject="/trimet-arrivals"
    />
  </Layout>
)

export default NotFoundPage
