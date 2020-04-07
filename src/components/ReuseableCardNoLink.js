import React from "react"
import Card from "react-bootstrap/Card"
import styled from "styled-components"

const StyledCard = styled(Card)`
  border: none;
  background-color: transparent;
  border-bottom-right-radius: calc(0.8rem - 1px);
  border-bottom-left-radius: calc(0.8rem - 1px);
  border-top-right-radius: calc(0.8rem - 1px);
  border-top-left-radius: calc(0.8rem - 1px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
`
const StyledCardImage = styled(Card.Img)`
  border-bottom-right-radius: calc(0.8rem - 1px);
  border-bottom-left-radius: calc(0.8rem - 1px);
  border-top-right-radius: calc(0.8rem - 1px);
  border-top-left-radius: calc(0.8rem - 1px);
`

const ResuableCard = ({ imgSrc, title }) => {
  return (
    <StyledCard>
      <StyledCardImage src={imgSrc} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-white">{title}</Card.Title>
        {/* <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text> */}
      </Card.ImgOverlay>
    </StyledCard>
  )
}

export default ResuableCard
