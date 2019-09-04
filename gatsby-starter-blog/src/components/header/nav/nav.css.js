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

  ul {
    list-style: none;
    padding-left: 0;
    display: inline-flex;
    margin-right: 5rem;
  }
  
  li {
    font-size: 2rem;  
    color: #666;
    padding: 1.5rem;
  }
  
  .active {
    color: peachpuff;
  }
`;

export const NavBranding = styled.div`
  padding: 1rem;
  margin-left: 2rem;
`;

