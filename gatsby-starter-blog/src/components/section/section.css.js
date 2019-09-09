import styled from 'styled-components';

export const StyledSection = styled.section`
  height: ${props => props.height ? props.height : '100vh'};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "inherit"};
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
    display: none;
  }
`;

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
`;