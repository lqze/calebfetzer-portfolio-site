import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

// Import sections to be displayed
// generic section component

import Section from "../components/section/section"
import { ContentWrapper }  from "../components/section/section.css"
import { 
  StyledNav, 
  BlogContent, 
  ArticleDate, 
  ArticleFlexContainer,
  DateContainer,
  ListingContainer,
  ArticleTitle,
  ArticleExcerpt,
  BlogBioWrapper,
  BlogBioCopy,
} from "../components/blog/blogList.css"



const DisplayPostsComponent = props => {
  return props.posts.map(({node})  => { // eslint-disable-line
    if (node.frontmatter.isPost === true) {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <ArticleFlexContainer key={node.fields.slug}>
          <DateContainer>
            <ArticleDate>{node.frontmatter.date}</ArticleDate>
          </DateContainer>
          <ListingContainer>
            <ArticleTitle>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
              <span className='mobile-date'>{node.frontmatter.date}</span>
            </ArticleTitle>
            <ArticleExcerpt dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }} />
          </ListingContainer>
        </ArticleFlexContainer>
      )}
    }
  )
}

export const StyledSection = styled(Section)`
  margin-right: 15%;
  margin-left: 4rem;
  width: auto;
  align-content: center;
  height: auto;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


class Blog extends React.Component {

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <StyledContainer>
        <StyledSection>
          <ContentWrapper>
            <StyledNav>
            <h4>
              <Link to='/'>
                CALEBFETZER.ME
              </Link>
            </h4>
          </StyledNav>
              <BlogBioWrapper>
                <BlogBioCopy>
                  <h2 className="no-gutter">Hello <span role="img" aria-label="Wave">👋</span>! 
                  Welcome to my blog</h2>
                  <p>I like to write about tech, life, business development and language learning.</p>
                </BlogBioCopy>
              </BlogBioWrapper>
              <BlogContent>
                <DisplayPostsComponent posts={posts}/>
              </BlogContent>
            </ContentWrapper>
        </StyledSection>
      </StyledContainer>
    )
  }
}

export default Blog;

export const query = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            description
            isPost
          }
        }
      }
    }
  }
`