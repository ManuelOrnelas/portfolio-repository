import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/drawing/">Drawing</Link>
    <Link to="/graphics-design/">Graphics Design</Link>
    <Link to="/interior-design/">Interior Design</Link>
    <Link to="/product-design/">Product Design</Link>
    <Link to="/sculpture/">Sculpture</Link>
    <Link to="/writing/">Writing</Link>
  </Layout>
)

export default IndexPage
