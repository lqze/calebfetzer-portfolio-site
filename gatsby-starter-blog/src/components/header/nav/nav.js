import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { StyledNav, NavBranding } from './nav.css';

// Handle active class for nav and also render key list from siteMetaData for navigation links
function LinkComponent(props) {
  const navMenu = props.linkList;
  
  return navMenu.map((item) => 
    <li key={item}>
      <a href={(item === 'blog') ? '/blog' : '#' + item}>
        {item.toUpperCase()}
      </a>
    </li>
  );
};

const Nav = ({ props }) => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          navMenu
          author
        }
      }
    }
  `)

  const { navMenu, author } = data.site.siteMetadata
  
  return (
    <StyledNav>
      <NavBranding>
        <h2>
          <Link to='/'>
            {author.toUpperCase()}
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