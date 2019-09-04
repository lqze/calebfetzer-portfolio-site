import React from "react"


import { Container, Title, BgImage, LeftHalf, RightHalf } from './hero.css'
import { graphql, StaticQuery } from 'gatsby'


function titleInnerTextMarkup() {
  return {__html: `<h1>Hello, I'm Caleb.</h1>`};
}

function TitleInnerText() {
  return <div dangerouslySetInnerHTML={titleInnerTextMarkup()} />;
}

function copyTextMarkup() {
  return {__html: `
    <p>I am a freelance web developer living in Perth, Western Australia.</p>
    <p>If you are looking for a professional website/web application please get in touch!</p>
  `}
}

function CopyText() {
  return <div dangerouslySetInnerHTML={copyTextMarkup()} />;
}

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "wall-front-light.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={ data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return ( 
        <Container>
          <LeftHalf>
            <Title>
              <TitleInnerText />
              <CopyText />
            </Title>
          </LeftHalf>
          <RightHalf>
            <BgImage
              fluid={imageData}>
            </BgImage>
          </RightHalf>
        </Container>
      )
    }}
  />
)

export default Hero;