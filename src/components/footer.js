import React, { useState, useEffect } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDribbble,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

const Footer = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    //TODO: Hide API key with env variables
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&appid=9ff3b3252f2b747c427a1c0be7eecc50"
      )
      .then(response => {
        setData(response.data)
        // console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const listGroupItemStyle = {
    backgroundColor: "transparent",
    borderColor: "#6c757d",
  }

  return (
    <footer>
      <Container className="pt-3">
        <Row
          className={[
            "d-flex",
            "align-items-center",
            "justify-content-center",
          ].join(" ")}
        >
          <Col xs={{ span: 12 }}>
            <div
              className={[
                "d-flex",
                "align-items-center",
                "justify-content-center",
                "pt-5",
              ].join(" ")}
            >
              <ul
                className={[
                  "mb-0",
                  "ml-0",
                  "list-group",
                  "list-group-horizontal",
                ].join(" ")}
              >
                <li
                  className={["list-group-item"].join(" ")}
                  style={listGroupItemStyle}
                >
                  <a href="//dribbble.com/noletorious">
                    <FontAwesomeIcon icon={faDribbble} size="lg" />
                  </a>
                </li>
                <li
                  className={["list-group-item"].join(" ")}
                  style={listGroupItemStyle}
                >
                  <a href="//github.com/noletorious">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                </li>
                <li
                  className={["list-group-item"].join(" ")}
                  style={listGroupItemStyle}
                >
                  <a href="//linkedin.com/in/noletorious">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </li>
                <li
                  className={["list-group-item"].join(" ")}
                  style={listGroupItemStyle}
                >
                  <a href="mailto:hello@noletorious.com">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={{ span: 12 }}>
            <div
              className={[
                "d-flex",
                "align-items-center",
                "justify-content-center",
                "pt-4",
                "pb-5",
              ].join(" ")}
            >
              <p className={["mb-0", "text-muted"].join(" ")}>
                {data
                  ? data.name + ", OR " + Math.round(data.main.temp) + "°F"
                  : "Loading weather data..."}
              </p>
              <img
                src={
                  data
                    ? "https://openweathermap.org/img/w/" +
                      data.weather[0].icon +
                      ".png"
                    : null
                }
                alt="weather icon"
                style={{ width: "30px" }}
                className={["mb-0", "ml-1"].join(" ")}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
