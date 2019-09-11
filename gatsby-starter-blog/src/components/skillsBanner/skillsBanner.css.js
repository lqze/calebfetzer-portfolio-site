import styled from "styled-components"

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
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
