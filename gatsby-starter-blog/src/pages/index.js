/* Single Page Layout for index page */

import React from "react"
import { graphql } from "gatsby"
import * as smoothscroll from 'smoothscroll-polyfill'



import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ScrollingColorBackground from "react-scrolling-color-background"

// Import sections to be displayed
import WorkSection from "../components/workSection/workSection"
import ContactSection from '../components/contact/contactSection'
// generic section component
import Section from "../components/section/section"
import { ContentWrapper }  from "../components/section/section.css"
import ScrollDownButton from "../components/scrollDownButton/scrollDown"

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
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <ScrollingColorBackground
          selector=".js-color-stop[data-background-color]"
          colorDataAttribute="data-background-color"
          initialRgb="rgb(0, 0, 0, 0)"
          style={customStyle}
        />
        
        <Section
          data-background-color="rgb(217,217,217)"
          className="js-color-stop"
          height={'100vh'}
        >
          <ContentWrapper>
            <div className="hero-border">
              <h1>
                CALEB FETZER
              </h1>
              <h3 style={{fontWeight: 300,}}>FULL-STACK DEVELOPER</h3>
            </div>
            <ScrollDownButton nextSection={'#about'} />
          </ContentWrapper>
        </Section>
        <Section
          data-background-color="rgb(255,251,238)"
          className="js-color-stop content-section"
          height={'100vh'}
        >
          <Hero name={`aboutSection`} id={`about`} />
          <ScrollDownButton nextSection={'#work'} />
        </Section>
        <WorkSection
          name={`workSection`}
          id={`work`}
          data-background-color="rgb(254, 235, 217)"
          className="js-color-stop content-section"
        >
        <ScrollDownButton nextSection={'#contact'} />
        </WorkSection>
        <ContactSection 
          name={`contactSection`}
          id={`contact`}
          data-background-color="rgb(251, 215, 134)"
          className="js-color-stop justify-center content-section"
        />
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
  }
`
