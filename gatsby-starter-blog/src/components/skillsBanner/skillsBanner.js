// Page showing
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Section from "../section/section"
import Gallery from "../gallery/gallery"

import { ImageContainer } from "./skillsBanner.css"

const SkillsBanner = (props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "wall-front.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        skillsJson {
          gallery {
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={ data => {
      const imageData = data.desktop.childImageSharp.fluid;
      const galleryItems = data.skillsJson.gallery;
      return (
        <Section height={`30vh`}>
          <ImageContainer>
            <Gallery items={galleryItems} />
          </ImageContainer>
        </Section>
      )
    }}
  />
)

export default SkillsBanner;

