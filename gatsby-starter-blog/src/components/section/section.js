/* Sections are 2 column layouts with full viewport height set */

import React from "react"
import { StyledSection} from './section.css'

class Section extends React.Component {
  render() {
    const { children } = this.props
    return (
      <StyledSection name={this.props.name} id={this.props.id} height={this.props.height}>
        {children}
      </StyledSection>
    )
  }
}

export default Section;
