import styled from "styled-components"

export const StyledNav = styled.nav`
  position: fixed;
  top: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
`;

export const BlogContent = styled.div`
  text-align: left;
  max-width: 860px;
`;



export const ArticleListing = styled.section`
  margin-left: 3rem;
  p {
    margin: 0;
  }
`;

export const ArticleFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const DateContainer = styled.div`
  flex: 1;
  max-width: 100px;
  text-align: right;
  align-self: baseline;
  margin-right: 1rem;
  @media screen and (max-width: 660px) and (max-height: 360px) {
    display: none;
  }
  @media screen and (max-width: 660px) {
    display: none;
  }
`;

export const ArticleDate = styled.h4`
  color: #666;
  margin: 0;
  font-weight: 300;
  text-align: right;
`

export const ListingContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  text-align: left;
  margin-left: 1.5rem;
`;

export const ArticleTitle = styled.h3`
  flex: 2;
  margin-bottom: 0;
  margin-top: 0;
`

export const ArticleExcerpt = styled.p`
  flex: 2;
  margin: 0;
`

export const BlogBio = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-left: 1rem;
`;

export const BlogPostWrapper = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 960px;
`;

export const StyledNavBlogPost = styled.nav`
  margin-bottom: 2rem;
`;