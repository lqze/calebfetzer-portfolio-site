import React from "react"
import { Link } from "gatsby"

import { StyledHeader } from './header.css';

class Header extends React.Component {
  render () {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let styleClass;
    if (location.pathname === rootPath) {
      styleClass = 'home__default';
    } else {
      styleClass = '';
    }
    return (
      <StyledHeader className={styleClass}>
        <h1>
        <Link to='/'>
          {title}
        </Link>
        </h1>
        {children}
      </StyledHeader>
    )
  }
}

export default Header;