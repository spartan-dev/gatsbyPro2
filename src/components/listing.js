import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
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
const Post = styled.article`
box-shadow:0px 3px 10px rgba(25,17,34,0.05);
padding: 1rem;
border-radius:4px;
margin-bottom :1rem;
a{
  color:black;
  text-decoration:none;

}
p{
  font-size:0.8rem;
  
}
.read-more{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:0.8rem;
  text-decoration:underline;
  color: #524763;
}
`
const Listing = () => (
   <StaticQuery
   query={LISTING_QUERY}
   render={({allMarkdownRemark})=>(
       allMarkdownRemark.edges.map(edge => (
           <Post key={edge.node.frontmatter.slug}>
           <Link to={`/posts${edge.node.frontmatter.slug}`}><h2>{edge.node.frontmatter.title }</h2></Link> 
       <p>{edge.node.frontmatter.date}</p>
       <p>{edge.node.excerpt}</p>
       <Link className='read-more' to={`/posts${edge.node.frontmatter.slug}`}>Read more</Link>
           </Post>
       ))
   )}
   />
)

export default Listing
