/* Single Page Layout for index page */

import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import * as smoothscroll from 'smoothscroll-polyfill'



import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"
import ScrollingColorBackground from "react-scrolling-color-background"

// Import sections to be displayed
import WorkSection from "../components/workSection/workSection"
import AboutSection from "../components/aboutSection/aboutSection"
import SkillsBanner from "../components/skillsBanner/skillsBanner"
import ContactSection from '../components/contact/contactSection'
// generic section component
import Section from "../components/section/section"
import { ContentWrapper }  from "../components/section/section.css"
import ScrollDownButton from "../components/scrollDownButton/scrollDown"


const DisplayPostsComponent = props => {
  return props.posts.map(({node})  => { // eslint-disable-line
    if (node.frontmatter.isPost === true) {
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
// ScrollingColorBackground Custom Style
const customStyle = {
  position: "fixed",
  inset: 0,
  top:0, bottom:0, right:0, left:0,
  zIndex: -100000, // needed to prevent background sitting on top of text
}

class Index extends React.Component {
  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <ScrollingColorBackground
          selector=".js-color-stop[data-background-color]"
          colorDataAttribute="data-background-color"
          initialRgb="rgb(0, 0, 0, 0)"
          style={customStyle}
        />
        
        <Section
          data-background-color="rgb(255, 248, 221)"
          className="js-color-stop"
          height={'100vh'}
        >
          <ContentWrapper>
            <div>
              <h1>
                Caleb Fetzer
              </h1>
              <h3>Developer</h3>
            </div>
            <ScrollDownButton nextSection={'#hero'} />
          </ContentWrapper>
        </Section>
        
        <Section
          data-background-color="rgb(255,251,238)"
          className="js-color-stop"
          height={'100vh'}
        >
          <Hero name={`heroSection`} id={`hero`} />
          <ScrollDownButton nextSection={'#work'} />
        </Section>

        <WorkSection
          name={`workSection`}
          id={`work`}
          data-background-color="rgb(254, 235, 217)"
          className="js-color-stop"
        >
        <ScrollDownButton nextSection={'#about'} />
        </WorkSection>

        <AboutSection
          name={`aboutSection`}
          id={`about`}
          data-background-color="rgb(255, 247, 218)"
          className="js-color-stop"
        >
        {/* <SkillsBanner /> */}
        <ScrollDownButton nextSection={'#contact'} />
        </AboutSection>

        <ContactSection 
          name={`contactSection`}
          id={`contact`}
          data-background-color="rgb(251, 215, 134)"
          className="js-color-stop justify-center"
        />
        {/* <SEO title="All posts" />
        <DisplayPostsComponent posts={posts} />
        <Bio /> */}
      </Layout>
    )
  }
}

export default Index;

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
