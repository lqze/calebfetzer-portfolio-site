import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { StyledNav, NavBranding } from './nav.css';

// Handle active class for nav and also render key list from siteMetaData for navigation links
function LinkComponent(props) {
  const navMenu = props.linkList;
  
  return navMenu.map((item) => 
    <li key={item}>
      <Link to={(item === 'blog') ? '/blog' : '#' + item}>
        {item}
      </Link>
    </li>
  );
};

const Nav = ({ props }) => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          navMenu
          title
        }
      }
    }
  `)

  const { navMenu, title } = data.site.siteMetadata
  
  return (
    <StyledNav className='test-nav'>
      <NavBranding>
        <h2>
        <Link to='/'>
          {title}
        </Link>
        </h2>
      </NavBranding>
      <ul>
        <LinkComponent linkList={navMenu} />
      </ul>
    </StyledNav>
  )
}

export default Nav