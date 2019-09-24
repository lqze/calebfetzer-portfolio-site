// Page showing
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Section from "../section/section"
import { LeftHalf, RightHalf } from '../section/section.css'

import { ImgContainer, MobileContentContainer } from './work/work.css'

const WorkSection = (props) => (
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
        desktop: file(relativePath: { eq: "smartmock_ups-min.png" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      } 
    `}
  render = { data => {
    const imageData = data.desktop.childImageSharp.fluid;
    return (
      <Section 
        name={props.name} 
        id={props.id} 
        className={props.className} 
        data-background-color={props['data-background-color']}
      >
        <LeftHalf backgroundColor='monokai' style={
          {justifyContent: 'center'}
        }>
          <MobileContentContainer>
            <h2 class="mobile-header">Warrantly.com.au</h2>
            <p>Full stack returns authorisation software, written in Express.js, MongoDB, HTML and CSS</p>
          </MobileContentContainer>        
          <ImgContainer>
            <a href="https://warrantly.com.au" target="about_blank" aria-label="Link to Warrantly Website">
            <Image fluid={imageData} />
            </a>
          </ImgContainer>
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
        {props.children}
      </Section>
    )
    }}
  />
)

export default WorkSection;

