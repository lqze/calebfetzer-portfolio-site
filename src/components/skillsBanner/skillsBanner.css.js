import styled from "styled-components"

export const ImageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  .gatsby-image-wrapper {
    width: 100vh;
    max-width: 148px;
    margin: 1rem;
  }
  div:hover {
    transform: scale(1.2);
  }
`;

export const StyledHeaderText = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 3rem;
`;
