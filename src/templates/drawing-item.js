import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class DrawingItem extends Component {

  constructor(props) {
    super(props)
    if (typeof window !== `undefined`)
      document.documentElement.style.setProperty('--navbaritem-active', "#fea529");
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      document.documentElement.style.setProperty('--navbar-logo', "#ffffff");
      document.documentElement.style.setProperty('--navbaritem-active', "#fff"); //Cor do tema
      document.documentElement.style.setProperty('--navbaritem-inactive', "#ffffff50");
      document.documentElement.style.setProperty('--navbaritem-inactive-hover', "#ffffff90");
      document.documentElement.style.setProperty('--navbar-after-text', "#fff");
    }
  }

  render() {
    const data = this.props.data.contentfulDrawingItems
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
      itemThumbnail {
        resize(width: 200, height: 200) {
					src
        }
      }
    }
  }
`
