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
  BlogBio
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
          <BlogBio>
            <h2 className="no-gutter">Hi 👋! Welcome to my Blog.</h2>
            <p>I'll try to post as often as I can.</p>
          </BlogBio>
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