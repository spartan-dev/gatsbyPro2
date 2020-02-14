import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../asets/logo.svg"

const HeaderWrapper = styled.div`
background: #524763;
margin-bottom:1.4rem;
img{
  margin-bottom:0;
  width:100px;
}
`
const HeaderContainer = styled.div`
  margin:0 auto;
        max-width: 960;
        padding:0.6rem;
`
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        ><img src={Logo} alt='Logo'/>
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
