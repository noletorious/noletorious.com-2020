import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "gatsby-image"
import ColorScheme from "./colorScheme"

const TriMetHeader = styled(Container)`
  padding-top: 6em;
  padding-bottom: 6em;
`

const TriMetWhiteLogo = styled(Image)`
  max-width: 200px;
  margin-left: -10px;
`

const ProjectHeader = ({
  logo,
  jobTitle,
  description,
  c1,
  c2,
  c3,
  c4,
  c5,
  bg,
}) => {
  return (
    <TriMetHeader style={{ backgroundColor: bg }} fluid>
      <Row>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6, offset: 3 }}
          className="text-white"
        >
          <TriMetWhiteLogo fluid={logo} />
          <ColorScheme c1={c1} c2={c2} c3={c3} c4={c4} c5={c5} />
          <div
            style={{ borderBottom: "1px solid rgba(255,255,255,.2)" }}
            className={["mb-3"].join(" ")}
          ></div>
          <p className="font-weight-bold">{jobTitle}</p>
          <p className="small">{description}</p>
        </Col>
      </Row>
    </TriMetHeader>
  )
}

export default ProjectHeader
