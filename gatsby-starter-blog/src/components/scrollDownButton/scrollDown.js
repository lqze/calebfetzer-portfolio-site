
import React from "react"
import { StyledButton } from "./scrollDown.css"

const ScrollDownButton = (props) => {
  return (
    <StyledButton>
      <a href={props.nextSection}></a>
    </StyledButton>
  )
}

export default ScrollDownButton;
