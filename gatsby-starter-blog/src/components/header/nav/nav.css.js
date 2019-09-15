import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: ease-in-out 0.3s;
  margin-right: 4rem;
  margin-left: 4rem;
  ul {
    display: inline-flex;
    list-style: none;
    padding-left: 0;
    margin-right: 4rem;
    margin-left: 4rem;
    font-weight: 700;
  }
  ul.burger-nav, div.burger {
    display: none;
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
  @media screen and (max-width: 686px) {
    margin: 0 2rem;
    margin-top: 1rem;
  
    .main-nav {
      display: none;
    }

    div.burger {
      font-size: 2.5rem;
      display: inline-block;
      /* margin-right: 4rem; */
    }
    .burger-nav {
      display: inline-flex;
      position: fixed;
      right: 0;
      top: 25px;
      border: 3px solid #333;
      background-color: #fff;
      flex-direction: column;
      text-align: center;
      width: 150px;
      li {
        margin: 1rem; 
      }
    }
  }
`;

export const NavBranding = styled.div`
  text-transform: uppercase;
  display: flex;
  align-self: center;

  /* margin-right: 4rem;
  margin-left: 4rem; */

  h1, h2, h3, h4 {
    margin: 0rem;
  }
`;

