import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class DrawingItem extends Component {
  render() {
    const data = this.props.data.contentfulDrawingItems
    return (
      <Layout>
        <div>
          <h1>{data.title}</h1>
          <p>{data.descriptions}</p>
          <p>{data.details}</p>
          <img src={data.itemPicture.resize.src} />
        </div>
      </Layout>
    )
  }
}

export default DrawingItem

export const pageQuery = graphql`
  query drawingItemQuery($slug: String!) {
    contentfulDrawingItems(slug: { eq: $slug }) {
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
