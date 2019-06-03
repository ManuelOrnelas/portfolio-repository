import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class GraphicsDesign extends Component {
  render() {
    console.log(this.props.data.allContentfulGraphicsDesignItems.edges)
    const graphicsDesignItems = this.props.data.allContentfulGraphicsDesignItems.edges
    return (
      <Layout>
        <div className="portfolio-jumbotron bg-blue">
          <h1>Graphic.</h1>
        </div>
        <div className="portfolio-list">
          <h1 className="blue">Projects.</h1>
          <div className="post-list">
            {graphicsDesignItems.map(item => {
              return (
                <Link to={"/graphics-design/" + item.node.slug} key={item.node.slug}>
                  <img src={item.node.itemPicture.resize.src} alt="item"/>
                </Link>
              )
            })}
          </div>
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
