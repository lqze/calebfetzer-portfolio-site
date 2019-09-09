import React from "react"
import Nav from "../header/nav/nav"
import { hideNavOnScroll } from "../../js/main"

class Layout extends React.Component {
  
  render() {
    const { children } = this.props
    return (
      <div>
        <Nav />    
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
