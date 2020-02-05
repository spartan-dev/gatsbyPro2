import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const LISTING_QUERY = graphql`
query BlogPostListing {
    allMarkdownRemark(
       limit:5,
       sort:{
         fields:[frontmatter___date],
         order:DESC
       },
       
     )  {
      edges {
        node {
         excerpt
          frontmatter {
            date(formatString:"MMMM DD, YYYY")
            title
           slug
          }
        }
      }
    }
   } 
`
const Listing = () => (
   <StaticQuery
   query={LISTING_QUERY}
   render={({allMarkdownRemark})=>(
       allMarkdownRemark.edges.map(edge => (
           <article key={edge.node.frontmatter.slug}>
           <Link to={`/posts${edge.node.frontmatter.slug}`}><h2>{edge.node.frontmatter.title }</h2></Link> 
       <p>{edge.node.frontmatter.date}</p>
       <p>{edge.node.excerpt}</p>
       <Link to={`/post${edge.node.frontmatter.slug}`}>Read more</Link>
           </article>
       ))
   )}
   />
)

export default Listing
