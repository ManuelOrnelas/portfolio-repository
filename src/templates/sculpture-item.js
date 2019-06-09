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
      document.documentElement.style.setProperty('--navbar-logo', "#ffffff");
      document.documentElement.style.setProperty('--navbaritem-active', "#fff"); //Cor do tema
      document.documentElement.style.setProperty('--navbaritem-inactive', "#ffffff50");
      document.documentElement.style.setProperty('--navbaritem-inactive-hover', "#ffffff90");
      document.documentElement.style.setProperty('--navbar-after-text', "#fff");
    }
  }

  render() {
    const data = this.props.data.contentfulSculptureItems
    return (
      <Layout>
        <div className="item-page">
          <div className="left">
            <div className="stuff">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <p>{data.details}</p>
            </div>
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
      itemThumbnail {
        resize(width: 200, height: 200) {
					src
        }
      }
    }
  }
`
