import React, { Component } from 'react';
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class GraphicsDesign extends Component {
  render() {
    console.log(this.props.data.allContentfulGraphicsDesignItems.edges)
    const graphicsDesignItems = this.props.data.allContentfulGraphicsDesignItems.edges
    return (
      <Layout>
        <div>
          <h1>graphicsDesign</h1>
          {graphicsDesignItems.map((item) => {
            return (
              <div>
                <Link to={"/graphics-design/" + item.node.slug}><img src={item.node.itemPicture.resize.src} /></Link>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default GraphicsDesign;

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