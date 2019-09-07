import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  max-height: 120px;
  z-index: 999;

  background-color: rgba(249, 247, 247, 0.1);
  transition: ease-in-out 0.2s;
  

  ul {
    display: inline-flex;
    
    list-style: none;
    padding-left: 0;

    margin-right: 4rem;
    margin-left: 4rem;

    font-weight: 700;
  }
  
  li {
    font-size: 2rem;  
    padding: 0 1.5rem;
    color: inherit;
  }
  
  .active-link {
    color: rgba(55, 133, 228, 0.8);
  }

  &:hover {
    background-color: rgba(249, 247, 247, 0.7);
    transition: ease-in-out 0.3s;
  }
`;

export const NavBranding = styled.div`
  display: flex;
  margin-right: 4rem;
  margin-left: 4rem;

  h1, h2, h3, h4 {
    margin: 1rem;
  }
`;

