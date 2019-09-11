import React from "react"
import ScrollingColorBackground from "react-scrolling-color-background"

import Header from "../header/header"
import Nav from "../header/nav/nav"

class Layout extends React.Component {
  
  render() {
    const { children } = this.props
    return (
      <div>
        <Header className="navigation">
          <Nav />
        </Header>
        <main>
          {children} 
        </main>
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
