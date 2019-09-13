import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: ease-in-out 0.3s;

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
    background-color: rgba(249, 249, 249, 0.7);
    transition: ease-in-out 0.3s;
  }
`;

export const NavBranding = styled.div`
  text-transform: uppercase;
  display: flex;
  align-self: center;

  margin-right: 4rem;
  margin-left: 4rem;

  /* border: 3px solid #333;
  padding: .8rem 1rem;

  &:hover {
    background: #333;
    a {
      color: #fff;
    }
  } */

  h1, h2, h3, h4 {
    margin: 0rem;
  }
`;

