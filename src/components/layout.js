
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Header from "./header"
import Archive from "./archive"
import "./layout.css"
import styled from "styled-components"
import { useSpring, animated } from 'react-spring'

const MainLayout = styled.main`
max-width:90%;
margin:1rem  auto;
display:grid;
grid-template-columns: 3fr 1fr;
grid-gap:40px;
`

const Layout = ({ children, location }) => {
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
  const styles = useSpring({
    to:{height: location.pathname === '/'? 300: 600},
    from: {height: location.pathname === '/' ? 600 : 300}
  })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      
      <animated.div style={{overflow:'hidden',...styles}}>          
       <Img fluid={data.file.childImageSharp.fluid}/>
      </animated.div> 
        {/* {location.pathname === '/' &&
        } */}
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
