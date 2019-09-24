import React from "react"

import Header from "../header/header"
import Nav from "../header/nav/nav"
import SEO from "../seo"

class Layout extends React.Component {
  
  render() {
    const { children } = this.props
    return (
      <div>
        <SEO title={"Caleb Fetzer - My Website"}></SEO>
        <Header className="navigation">
          <Nav />
        </Header>
        <main>
          {children} 
        </main>
        <footer>
          © {new Date().getFullYear()} - Caleb Fetzer
        </footer>
      </div>
    )
  }
}

export default Layout
