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
        <div className="item-page">
          <div className="right">
            <img src={data.itemPicture.resize.src} alt="item"/>
          </div>
          <div className="left">
            <div>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <p>{data.details}</p>
            </div>
          </div>
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
