import React from "react"
import Scrollspy from "react-scrollspy"

import { Link, graphql, useStaticQuery } from "gatsby"
import { StyledNav, NavBranding } from './nav.css';

const Nav = () => {
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
        <h4>
          <Link to='/'>
            {author}
          </Link>
        </h4>
      </NavBranding>
      
      <Scrollspy items={['about', 'work', 'contact']} 
        currentClassName="active-link"
        >
          {navMenu.map((item) => {
              return ( <li key={item}>
                <a href={(item === 'blog') ? '/blog' : '#' + item}>
                  {item.toUpperCase()}
                </a>
              </li> )
            })}
      </Scrollspy>
    </StyledNav>
      
  )
}

export default Nav