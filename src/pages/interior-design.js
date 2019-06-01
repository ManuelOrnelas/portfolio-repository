import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class InteriorDesign extends Component {
  render() {
    console.log(this.props.data.allContentfulInteriorDesignItems.edges)
    const interiorDesignItems = this.props.data.allContentfulInteriorDesignItems
      .edges
    return (
      <Layout>
        <div className="full-page">
          <h1>Interior.</h1>
        </div>
        <h1>Projects.</h1>
        <div>
          {interiorDesignItems.map(item => {
            return (
              <Link to={"/interior-design/" + item.node.slug}>
                <img src={item.node.itemPicture.resize.src} />
              </Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default InteriorDesign

export const pageQuery = graphql`
  query allInteriorDesignItemsQuery {
    allContentfulInteriorDesignItems {
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
