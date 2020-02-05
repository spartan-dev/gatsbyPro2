import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Archive from '../components/archive'
import Listing from '../components/listing'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Listing/>
    <Archive/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
