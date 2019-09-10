import React from "react"
import { Link } from "gatsby"

import { StyledHeader } from './header.css';

class Header extends React.Component {
  render () {
    const { children } = this.props;
    return (
      <StyledHeader className={this.props.className ? this.props.className : ''}>
        {children}
      </StyledHeader>
    )
  }
}

export default Header;