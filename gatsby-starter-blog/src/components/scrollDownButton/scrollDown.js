
import React from "react"
import { StyledButton } from "./scrollDown.css"

const ScrollDownButton = (props) => {
  return (
    <StyledButton href={props.nextSection}>
      ▼
    </StyledButton>
  )
}

export default ScrollDownButton;
