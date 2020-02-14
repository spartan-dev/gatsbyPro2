import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
 allMarkdownRemark(
    limit:5,
    sort:{
      fields:[frontmatter___date],
      order:DESC
    },
    
  )  {
   edges {
     node {
       frontmatter {
         slug
         title
       }
     }
   }
 }
}
`

const ArchiveList = styled.ul`
padding:0;
margin:0;
list-style:none;
a{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:0.8rem;
  text-decoration:underline;
  color: #524763;
}

`
const archive = () => (

  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (

              <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
)
export default archive
