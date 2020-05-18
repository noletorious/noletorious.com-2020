import React, { useContext } from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "gatsby-image"
import ColorScheme from "./colorScheme"
import Accordion from "react-bootstrap/Accordion"
import AccordionContext from "react-bootstrap/AccordionContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

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
  impact,
  c1,
  c2,
  c3,
  c4,
  c5,
  bg,
}) => {
  const currentEventKey = useContext(AccordionContext)
  console.log(currentEventKey)
  const accordionIsExpanded = currentEventKey > 0
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
          <p className="small">{description}</p>

          <Accordion>
            <p>
              <Accordion.Toggle
                eventKey="0"
                className={["impact-link"].join(" ")}
              >
                {jobTitle}{" "}
                <FontAwesomeIcon
                  icon={accordionIsExpanded ? faChevronUp : faChevronDown}
                />
              </Accordion.Toggle>
            </p>
            <p className="mt-3">
              <Accordion.Collapse eventKey="0">
                <p
                  style={{ borderTop: "1px solid rgba(255,255,255,.2)" }}
                  className={["small", "pt-3"].join(" ")}
                >
                  {impact}
                </p>
              </Accordion.Collapse>
            </p>
          </Accordion>
        </Col>
      </Row>
    </TriMetHeader>
  )
}

export default ProjectHeader
