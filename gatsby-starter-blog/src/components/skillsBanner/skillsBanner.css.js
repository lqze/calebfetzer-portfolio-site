import styled from "styled-components"

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 148px;
    margin: 1rem;
  }

  div:hover {
    max-width: 166px;
  }
`;