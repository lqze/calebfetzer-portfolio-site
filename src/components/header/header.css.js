import styled from 'styled-components';

export const StyledHeader = styled.header`
  
  transition: ease-in-out 0.3s;
  
  .home__default {
    color: blue;
  }

  &.navigation {
    position: fixed;
    top: 0;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    max-height: 120px;
    z-index: 999;

    background-color: rgba(249, 247, 247, 0.1);
    
  }

  &.blog-post {
    display: block;
    margin-top: 6.5%;
  }

  @media only screen and (min-width : 1224px) {
    &:hover {
      background-color: rgba(249, 249, 249, 1);
      transition: ease-in-out 0.3s;
    }
    &:hover {
      top: 0 !important;
    } 
  }
`;


