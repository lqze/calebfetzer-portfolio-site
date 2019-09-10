/* Single Page Layout for index page */

import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"

// Import sections to be displayed
import WorkSection from '../components/workSection/workSection'
import AboutSection from '../components/aboutSection/aboutSection'
import SkillsBanner from '../components/skillsBanner/skillsBanner'

const DisplayPostsComponent = (props) => {
  return props.posts.map(({ node }) => {
    if(node.frontmatter.isPost === true) {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <article key={node.fields.slug}>
          <header>
            <h3>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </article>
      )
    }
  })
}

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Hero name={`heroSection`} id={`hero`} />
        <WorkSection name={`workSection`} id={`work`} />
        <SkillsBanner />
        <AboutSection name={`aboutSection`} id={`about`} />  
        <SEO title="All posts" />
        <DisplayPostsComponent posts={posts} />
        <Bio />
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query IndexpageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            isPost
          }
        }
      }
    }
  }
`
