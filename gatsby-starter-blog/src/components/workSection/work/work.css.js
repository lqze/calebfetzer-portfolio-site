import styled from 'styled-components';

export const MainImage = styled.div`
  padding: 4rem;
  align-self: center;
`;

export const ImgContainer = styled.div`
  margin: 5rem;
  @media screen and (max-width: 768px) and (max-height: 828px){
    margin: 1.5rem;
  }
`;

export const MobileContentContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) and (max-height: 690px) {
    display: block;
    h1,h2,h3 {
      margin-bottom: 0.5rem;
    }
    margin: 2rem;
    margin-bottom: 0.5rem;
  }
`;