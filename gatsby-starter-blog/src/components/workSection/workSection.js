// Page showing
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Section from "../section/section"
import { LeftHalf, RightHalf } from '../section/section.css'

import { MainImage } from './work/work.css'

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
    }
  `}
  render = { data => {
    return (
      <Section name="work" id="work-section">
        <LeftHalf backgroundColor='monokai'>
          <MainImage />
          <h1>Test</h1>
        </LeftHalf>
        <RightHalf backgroundColor="inherit">
          <h2>Warrantly {data.sectionContentJson.title}</h2>
          <div dangerouslySetInnerHTML={{
            __html: data.sectionContentJson.content.childMarkdownRemark.html
            }} 
          />
          <article>
            <h3>Full Stack Cloud based Returns Authorisation Software</h3>
            <p>Warrantly was built with Express.js, Node.js, HTML, CSS and JavaScript with some touches of jQuery</p> 
          </article>
        </RightHalf>
      </Section>
    )
    }}
  />
)

export default WorkSection;

