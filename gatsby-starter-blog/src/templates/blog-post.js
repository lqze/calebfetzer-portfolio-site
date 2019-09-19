import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { StyledNavBlogPost, BlogContent, ArticleFlexContainer, BlogPostWrapper } from "../components/blog/blogList.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <BlogPostWrapper>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
          
          <BlogContent style={{marginTop: `2rem`,}}>
            <StyledNavBlogPost>
              <h4>
                <Link to='/'>
                  CALEBFETZER.ME
                </Link>
              </h4>
            </StyledNavBlogPost>
            <Header location={this.props.location}>
              <h1 style={{marginBottom: 0}}>
                {post.frontmatter.title}
              </h1>
              <p style={{display: `block`}}>
                {post.frontmatter.date}
              </p>
            </Header>
              <ArticleFlexContainer>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </ArticleFlexContainer>
            </BlogContent>
          <hr />
          <footer>
            <Bio />
          </footer>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </BlogPostWrapper>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
