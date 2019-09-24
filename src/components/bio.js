/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          authorBio
        }
      }
    }
  `)

  const { author, authorBio } = data.site.siteMetadata
  return (
    <div style={{ display: `flex` }}>
      <p>
        Written by <a href="/"><strong>{author}</strong></a>.
        {/* Only edit authorBio in siteMetadata to prevent issues with formatting */}
        {' ' + authorBio}
      </p>
    </div>
  )
}

export default Bio;
