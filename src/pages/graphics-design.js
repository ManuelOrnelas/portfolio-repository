import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class GraphicsDesign extends Component {
  render() {
    console.log(this.props.data.allContentfulGraphicsDesignItems.edges)
    const graphicsDesignItems = this.props.data.allContentfulGraphicsDesignItems
      .edges
    return (
      <Layout>
        <div className="full-page">
          <h1>Graphics.</h1>
        </div>
        <h1>Projects.</h1>
        <div>
          {graphicsDesignItems.map(item => {
            return (
              <Link to={"/graphics-design/" + item.node.slug}>
                <img src={item.node.itemPicture.resize.src} />
              </Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default GraphicsDesign

export const pageQuery = graphql`
  query allGraphicsDesignItemsQuery {
    allContentfulGraphicsDesignItems {
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
