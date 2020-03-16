import React from "react"
import styled from "styled-components"

const ColorSchemeWrapper = styled.div`
  min-width: 200px;
  height: 50px;
  margin: 1em 0;
`
const ColorBox = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  float: left;
`

const colorScheme = ({ c1, c2, c3, c4, c5 }) => {
  return (
    <ColorSchemeWrapper>
      <ColorBox
        style={{
          backgroundColor: c1,
          border: "1px dashed rgba(255,255,255,.5)",
        }}
      />
      <ColorBox style={{ backgroundColor: c2 }} />
      <ColorBox style={{ backgroundColor: c3 }} />
      <ColorBox style={{ backgroundColor: c4 }} />
      <ColorBox style={{ backgroundColor: c5 }} />
    </ColorSchemeWrapper>
  )
}

export default colorScheme
