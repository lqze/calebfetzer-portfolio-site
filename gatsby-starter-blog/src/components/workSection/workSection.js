// Page showing
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Section from "../section/section"
import { LeftHalf, RightHalf } from '../section/section.css'

import { ImageContainer } from './work/work.css'

const WorkSection = () => (
  <StaticQuery
    query={graphql`
      query {
        sectionContentJson {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
        desktop: file(relativePath: { eq: "smartmock_ups.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      } 
    `}
  render = { data => {
    const imageData = data.desktop.childImageSharp.fluid;
    return (
      <Section name="work" id="work-section">
        <LeftHalf backgroundColor='monokai' style={
          {justifyContent: 'center'}
        }>
          <ImageContainer>
            <a href="https://warrantly.com.au" target="about_blank">
            <Image fluid={imageData} />
            </a>
          </ImageContainer>
        </LeftHalf>
        <RightHalf backgroundColor="inherit" style={
          {
            justifyContent: 'center',
          }
        }>
          <div dangerouslySetInnerHTML={{
            __html: data.sectionContentJson.content.childMarkdownRemark.html
            }}
            style={{
              fontWeight: 300,
              margin: `0 5rem`,
              fontSize: `2rem`,
            }}
          /> 
        </RightHalf>
      </Section>
    )
    }}
  />
)

export default WorkSection;

