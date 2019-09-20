import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout/layout"
// Import sections to be displayed
// generic section component

import Section from "../components/section/section"
import { ContentWrapper }  from "../components/section/section.css"
import { 
  StyledNav, 
  BlogContent, 
  ArticleDate, 
  ArticleListing,
  ArticleFlexContainer,
  DateContainer,
  ListingContainer,
  ArticleTitle,
  ArticleExcerpt,
  BlogBioWrapper,
  BlogBioCopy,
  BioImageWrapper,
} from "../components/blog/blogList.css"
import Bio from "../components/bio"



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
  width: auto !important;
  align-content: center;
`;


class Blog extends React.Component {

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
    <StyledSection>
      <StyledNav>
        <h4>
          <Link to='/'>
            CALEBFETZER.ME
          </Link>
        </h4>
      </StyledNav>
        <ContentWrapper>
          <BlogBioWrapper>
            <BlogBioCopy>
              <h2 className="no-gutter">Hello 👋! Welcome to my blog</h2>
              <p>I like to write about tech, life, business development and language learning.</p>
            </BlogBioCopy>
            <BioImageWrapper>
              
            </BioImageWrapper>
          </BlogBioWrapper>
          <BlogContent>
            <DisplayPostsComponent posts={posts}/>
          </BlogContent>
        </ContentWrapper>
      </StyledSection>
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