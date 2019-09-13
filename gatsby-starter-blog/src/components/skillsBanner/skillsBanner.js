// Page showing
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Section from "../section/section"
import Gallery from "../gallery/gallery"

import { ImageContainer, StyledHeaderText } from "./skillsBanner.css"

const SkillsBanner = () => (
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
            alt
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
      const galleryItems = data.skillsJson.gallery;
      return (
        // <Section height={`30vh`}>
        <div>

          <ImageContainer>
            <Gallery items={galleryItems} />
          </ImageContainer>
          <StyledHeaderText>
            <h3>The technology I frequently use!</h3>
          </StyledHeaderText>
        </div>
        // </Section>
      )
    }}
  />
)

export default SkillsBanner;

