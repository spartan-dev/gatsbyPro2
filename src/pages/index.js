import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Listing from '../components/listing'
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Listing/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
