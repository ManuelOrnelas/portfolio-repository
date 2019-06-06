import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class SculptureItem extends Component {

  constructor(props) {
    super(props)
    if (typeof window !== `undefined`)
      document.documentElement.style.setProperty('--navbaritem-active', "#fa4a4d");
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      document.documentElement.style.setProperty('--navbar-logo', "#fff");
      document.documentElement.style.setProperty('--navbaritem-active', "#fff");
    }
  }

  render() {
    const data = this.props.data.contentfulSculptureItems
    return (
      <Layout>
        <div className="item-page">
          <div className="left">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <p>{data.details}</p>
          </div>
          <div className="right">
            <img src={data.itemPicture.resize.src} alt="item"/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SculptureItem

export const pageQuery = graphql`
  query sculptureItemQuery($slug: String!) {
    contentfulSculptureItems(slug: { eq: $slug }) {
      slug
      title
      description
      details
      itemPicture {
        resize {
          src
        }
      }
    }
  }
`
