import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class ProductDesign extends Component {
  render() {
    console.log(this.props.data.allContentfulProductDesignItems.edges)
    const productDesignItems = this.props.data.allContentfulProductDesignItems
      .edges
    return (
      <Layout>
        <div className="full-page portfolio-main pink">
          <h1>Product.</h1>
        </div>
        <div className="min-full-height">
          <h1>Projects.</h1>
          {productDesignItems.map(item => {
            return (
              <Link to={"/product-design/" + item.node.slug} key={item.node.slug}>
                <img src={item.node.itemPicture.resize.src} alt="item"/>
              </Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default ProductDesign

export const pageQuery = graphql`
  query allProductDesignItemsQuery {
    allContentfulProductDesignItems {
      edges {
        node {
          slug
          itemPicture {
            resize {
              src
            }
          }
        }
      }
    }
  }
`
