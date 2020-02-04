import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

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
const archive = () => (

    <StaticQuery
        query={POST_ARCHIVE_QUERY}
        render={({ allMarkdownRemark }) => (
            <>
                <aside>
                    <h3>Archive</h3>
                    <ul>
                    {allMarkdownRemark.edges.map(edge => (
                        
                            <li key={edge.node.frontmatter.slug}>
                               <Link to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link> 
                            </li>

                        
                    ))}
                    </ul>
                </aside>
            </>
        )}
    />
)
export default archive
