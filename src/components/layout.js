
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Header from "./header"
import Archive from "./archive"
import "./layout.css"
import styled from "styled-components"

const MainLayout = styled.main`
max-width:90%;
margin:0 auto;
display:grid;
grid-template-columns: 3fr 1fr;
grid-gap:40px;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    
      file(relativePath:{regex:"/bg/"}){
    childImageSharp{
      fluid(maxWidth:1000){
        ...GatsbyImageSharpFluid
      }
    }
  }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Img fluid={data.file.childImageSharp.fluid}/>
        <MainLayout>
          <div>
          {children}
          </div>
          <Archive/>
        </MainLayout>
       
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
