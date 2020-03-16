import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "gatsby"

const NextContentPage = ({ otherProject, title }) => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <p className="mb-0">
            <Link to="/">
              <FontAwesomeIcon icon={faLongArrowAltLeft} /> Go Home
            </Link>
          </p>
        </Col>
        <Col>
          <p className={["text-right", "mb-0"].join(" ")}>
            <Link to={otherProject}>
              Next: {title} <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default NextContentPage
