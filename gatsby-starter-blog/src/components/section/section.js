import React from "react"
import { StyledSection } from './section.css'

class Section extends React.Component {
  render() {
    const { children } = this.props
    return (
      <StyledSection name={this.props.name} id={this.props.id}>
        {children}
      </StyledSection>
    )
  }
}

export default Section;
