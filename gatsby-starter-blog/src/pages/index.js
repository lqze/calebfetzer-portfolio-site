/* Single Page Layout for index page */

import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"
import ScrollingColorBackground from "react-scrolling-color-background"

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
const customStyle = {
  position: 'fixed',
  inset: 0,
  zIndex: -100000,
}
class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <ScrollingColorBackground
            selector='.js-color-stop[data-background-color]'
            colorDataAttribute='data-background-color'
            initialRgb='rgb(0, 0, 0)'
            style={customStyle}
            >
        </ScrollingColorBackground>
          <section 
            data-background-color='rgb(32, 202, 172)'
            className='js-color-stop'>
            <Hero name={`heroSection`} id={`hero`} />
          </section> 
          <WorkSection name={`workSection`} id={`work`}
            data-background-color='rgb(32, 202, 172)'
            className='js-color-stop'
            />
          <SkillsBanner />
          <AboutSection name={`aboutSection`} id={`about`}
            data-background-color='rgb(60, 191, 246)'
            className='js-color-stop'
            />  
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
