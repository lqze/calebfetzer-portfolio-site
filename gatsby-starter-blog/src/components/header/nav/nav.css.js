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

  div.burger {
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
      position: fixed;
      right: 0;
      top: 25px;
      background-color: #fff;
      flex-direction: column;
      text-align: center;
      width: 100%;
      margin: 0;
      margin-top: 2rem;
      li {
        margin: 1rem; 
      }

    }
    .active-nav {
      display: inline-flex;
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

