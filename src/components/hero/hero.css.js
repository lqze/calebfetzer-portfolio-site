import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const Container = styled.div `
  /* height: 100vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Title = styled.div `
  position: relative;
  top: 40%;
  transform: translate(0, -35%);
  margin-left: 4rem;
  margin-right: 4rem;
  padding: 0.5rem;
  h1 {
    font-size: 4.5rem;
    color: inherit;
  }
  .hero__p_span {
    color: rgb(223, 122, 42);
  }
  @media screen and (max-width: 764px) {
    h1 {
      margin-top: 0;
      font-size: 3.5rem;
    }
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media screen and (max-width: 764px) and (max-height: 690px) {
    top: 38%;
  }
`;

export const Copy = styled.div`
  div {
    font-size: 2.5rem;
    font-weight: 300;
    a.half-link-highlight {
      padding: 0.25rem 0.25rem;
      margin: 0.5rem 0;
      position: relative;

      &:hover {
        color: black;
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 35%;
        bottom: 10%;
        left: 0;
        background-color: rgba(120,220,232, 0.3);
        z-index: -10;
        -webkit-transition: all .1s linear;
        -moz-transition: all .1s linear;
        transition: all .1s linear;
      }
    }
    a.email-link {
      &:hover {
        color: black;
        padding: 1rem 0.5rem;
        &:after {
          background-color: rgba(120,220,232, 0.5);   
          height: 75%;
          color: inherit;
          border-radius: 8px;
          box-shadow: 0px 2px 1px #ececec;
        }
      }
    }
    @media screen and (max-width: 764px) {
      font-size: 2.2rem;
    }
    @media screen and (max-width: 764px) and (max-height: 690px) {
      font-size: 1.8rem;
    }
  }
`;

export const LeftHalf = styled.div `

  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  color: inherit;

`;


export const RightHalf = styled.div `

  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

  
  @media screen and (max-width: 726px) {
    display: none;
  }

`;

export const BgImage = styled(BackgroundImage)`
  height: 100vh;
  background-size: cover;
`;

export const Background = styled.img ``;