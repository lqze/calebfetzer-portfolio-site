import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { StyledNavBlogPost, BlogContent, ArticleFlexContainer, BlogPostWrapper, StyledList } from "../components/blog/blogList.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(this.props.pageContext)
    return (
      <BlogPostWrapper>
        <StyledNavBlogPost>
          <StyledList>
            <li>
              <Link to='/'>
                {siteTitle}
              </Link>
            </li>
            <li>
              /
            </li>                  
            <li>
              <Link to='/blog'>
                Blog
              </Link>
            </li>
          </StyledList>
        </StyledNavBlogPost>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
          <BlogContent style={{marginTop: `2rem`,}}>
            <Header location={this.props.location}>
              <h1 style={{marginBottom: 0}}>
                {post.frontmatter.title}
              </h1>
              <p style={{display: `block`}}>
                {post.frontmatter.date}
              </p>
            </Header>
              <ArticleFlexContainer>
                <article dangerouslySetInnerHTML={{ __html: post.html }} />
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
                <NextPost props={next} />
              )}
            </li>
          </ul>
        </nav>
      </BlogPostWrapper>
    )
  }
}

function NextPost(props) {
  if (props.props.frontmatter.title.length > 1) {
    return (
      <Link to={props.props.fields.slug} rel="next">
        {props.props.frontmatter.title} →
      </Link>
    )
  } else {
    return null;
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
        isPost
      }
    }
  }
`
