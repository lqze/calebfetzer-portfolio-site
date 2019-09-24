import styled from "styled-components"



export const StyledButton = styled.a`
  text-align:center;
  vertical-align: top;
  color: #333;
  margin: 0 auto;
  position: absolute;
  bottom: 5rem;
  left: 0;
  right: 0;
  font-size: 4rem;
  &:hover {
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s;
    bottom: 5.1rem;
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
  @media screen and (max-width: 760px) and (max-height: 640px) {
    display: none;
  }
`;