// Page showing
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Section from "../section/section"
import { CenteredContent, StyledArticle } from './aboutSection.css'

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
      <Section 
        name={props.name} 
        id={props.id}
        className={props.className} 
        data-background-color={props['data-background-color']}
      >
        <CenteredContent>
          <StyledArticle dangerouslySetInnerHTML={{
            __html: data.aboutJson.content.childMarkdownRemark.html
            }}
          />
          {props.children}
        </CenteredContent>
      </Section>
    )
    }}
  />
)

export default AboutSection;

