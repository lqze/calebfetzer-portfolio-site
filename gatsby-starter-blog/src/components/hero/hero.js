import React, { Children } from "react"


import { Container, Title, BgImage, LeftHalf, RightHalf, Copy } from './hero.css'
import { graphql, StaticQuery } from 'gatsby'


function titleInnerTextMarkup() {
  return {__html: `<h1>Hey, I'm <span class="hero__p_span">Caleb</span></h1>`};
}

function TitleInnerText(props) {
  return <div className={props.className} dangerouslySetInnerHTML={titleInnerTextMarkup()} />;
}

function copyTextMarkup() {
  return {__html: `
    <p>
      I am a full stack <strong>web-developer</strong> from Perth, Western Australia.<br />
      I specialise in JavaScript, particularly Node.js, and also have a keen insight on business development.
    </p>
    <p>
      For any kind of enquiry, please feel free to email me at 
      <a href="mailto:caleb.fetzer@gmail.com?subject='Website Enquiry'">caleb.fetzer@gmail.com</a>
    </p>
  `}
}

function CopyText() {
  return <div dangerouslySetInnerHTML={copyTextMarkup()} />;
}

const Hero = () => (
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
      }
    `}
    render={ data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return ( 
        <Container>
          <LeftHalf>
            <Title color={'#a9dc76'}>
              <TitleInnerText />
              <Copy>
                <CopyText />
              </Copy>
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