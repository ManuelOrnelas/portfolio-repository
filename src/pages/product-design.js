import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class ProductDesign extends Component {
  render() {
    console.log(this.props.data.allContentfulProductDesignItems.edges)
    const productDesignItems = this.props.data.allContentfulProductDesignItems.edges
    return (
      <Layout>
        <div className="portfolio-jumbotron bg-pink">
          <h1>Product.</h1>
        </div>
        <div className="portfolio-list">
          <h1 className="pink">Projects.</h1>
          <div className="post-list">
            {productDesignItems.map(item => {
              return (
                <Link to={"/product-design/" + item.node.slug} key={item.node.slug}>
                  <img src={item.node.itemThumbnail.resize.src} alt="item"/>
                </Link>
              )
            })}
          </div>
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
          itemThumbnail {
            resize {
              src
            }
          }
        }
      }
    }
  }
`
