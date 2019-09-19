import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Section from "../components/section/section"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <Section>
          <h1>Page not found!</h1>
          <p>Let's go back home, shall we?</p>
          <Link to='/'>
            Click here.
          </Link>
        </Section>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
