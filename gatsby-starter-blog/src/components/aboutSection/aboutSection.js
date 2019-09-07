// Page showing
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Section from "../section/section"
import { CenteredContent } from '../section/section.css'

import { ImageContainer } from './aboutSection.css'

const AboutSection = (props) => (
  <StaticQuery
    query={graphql`
      query {
        aboutJson {
          title
          content {
          childMarkdownRemark {
            html
            }
          }
        }
      } 
    `}
  render = { data => {
    return (
      <Section name={props.name} id={props.id}>
        <CenteredContent>
          <div dangerouslySetInnerHTML={{
            __html: data.aboutJson.content.childMarkdownRemark.html
            }}
            style={{
              fontWeight: 300,
              margin: `0 5rem`,
              fontSize: `2rem`,
            }}
          />
        </CenteredContent>
      </Section>
    )
    }}
  />
)

export default AboutSection;

