import styled from "styled-components"

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  margin-bottom: 2rem;
  margin-left: 1rem;
`;

export const BlogContent = styled.div`
  text-align: left;
  max-width: 860px;
  header {
    margin-bottom: 4rem;
    p {
      margin: 1rem 0;
      color: #666;
      font-weight: 300;
    }
    @media screen and (max-width: 760px) {
      margin-bottom: 3rem;
    }
  }
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
  @media screen and (max-width: 660px) {
    margin-bottom: 2.5rem;
  }
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
  margin-left: 1rem;
`;

export const ArticleTitle = styled.h3`
  flex: 2;
  margin-bottom: 0;
  margin-top: 0;
  span {
    display: none;
    
  }
  @media screen and (max-width: 660px) {
    margin-bottom: .5rem;
    span {
      display: block;
      font-size: 1.2rem;
      font-weight: normal;
      color: #666;
    }
  }
`

export const ArticleExcerpt = styled.p`
  flex: 2;
  margin: 0;
`

export const BlogBioWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-left: 1rem;
`;

export const BlogBioCopy = styled.div`
  text-align: justify;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-left: 1rem;
`;

export const BioImageWrapper = styled.div`
`;

export const BlogPostWrapper = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 960px;
  @media screen and (max-width: 760px) and (orientation: portrait) {
    margin-left: 2rem;
    margin-right: 2.5rem;
  }
`;

export const StyledNavBlogPost = styled.nav`
  margin-bottom: 2rem;
`;

export const StyledList = styled.ul`
  text-decoration: none;
  list-style: none;
  display: inline-flex;
  padding: 0;
  li {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;