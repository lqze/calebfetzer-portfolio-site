import styled from 'styled-components';

export const StyledSection = styled.section`
  height: ${props => props.height ? props.height : '100vh'};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "inherit"};
  &.justify-center {
    justify-content: center !important;
  }
  position: relative;
`;


export const LeftHalf = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "inherit"};
`;


export const RightHalf = styled.div`
  height: 100%;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "inherit"};
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

  
  @media screen and (max-width: 726px) {
    display: ${props => props.displayOption ? props.displayOption : "none"};
  }
`;

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 0 auto;
  .hero-border {
    overflow: hidden;
    position: relative;
    padding: 1.7rem 3rem;
    border: .6rem solid #38b6ff;
    
    h1, h3 {
      margin: 0;
    }
    h3 {
      margin-top: 1rem;
    }
    &:active:after {
      opacity: 0;
    }
    &:after {
      animation: shine 5s ease-in-out  infinite;
      animation-fill-mode: forwards;  
      content: "";
      position: absolute;
      top: -110%;
      left: -210%;
      width: 200%;
      height: 200%;
      opacity: 0;
      transform: rotate(30deg);
      
      background: rgba(255, 255, 255, 0.13);
      background: linear-gradient(
        to right, 
        rgba(255, 255, 255, 0.13) 0%,
        rgba(255, 255, 255, 0.13) 77%,
        rgba(255, 255, 255, 0.5) 92%,
        rgba(255, 255, 255, 0.0) 100%
      );
    }   
    @keyframes shine{
      10% {
        opacity: 1;
        top: -30%;
        left: -30%;
        transition-property: left, top, opacity;
        transition-duration: 0.7s, 0.7s, 0.15s;
        transition-timing-function: ease;
      }
      100% {
        opacity: 0;
        top: -30%;
        left: -30%;
        transition-property: left, top, opacity;
      }
    }

  }
`;