import React from "react"
import { StyledSection } from './section.css'

class Section extends React.Component {
  render() {
    const { children } = this.props
    return (
      <StyledSection name>
        {children}
      </StyledSection>
    )
  }
}

export default Section;
