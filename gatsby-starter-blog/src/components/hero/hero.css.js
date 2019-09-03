import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const Container = styled.div`
  height: 100vh;
  display: grid;
`;

export const Title = styled.div`
  color: #333;
  position: absolute;
  top: 40%;
  transform: translate(20%, 0);
  padding: 1rem;
`;

export const Copy = styled.p`
  font-size: 2rem;
`;

export const LeftHalf = styled.div`
  background-color: #F9F7F7;
  grid-column: 1;
`;


export const RightHalf = styled.div`
  grid-column: 2;
  
  @media screen and (max-width: 1200px) {
    grid-column: auto;
  }
  
  @media screen and (max-width: 726px) {
    display: none;
  }
`;

export const BgImage = styled(BackgroundImage)`
  height: 100vh;
  background-size: cover;
`;

export const Background = styled.img``;