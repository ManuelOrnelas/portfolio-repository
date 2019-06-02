import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class Writing extends Component {
  render() {
    console.log(this.props.data.allContentfulWritingItems.edges)
    const writingItems = this.props.data.allContentfulWritingItems.edges
    return (
      <Layout>
        <div className="full-page">
          <h1>Writing.</h1>
        </div>
        <h1>Projects.</h1>
        <div>
          {writingItems.map(item => {
            return (
              <Link to={"/writing/" + item.node.slug}>
                <img src={item.node.itemPicture.resize.src} />
              </Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Writing

export const pageQuery = graphql`
  query allWritingItemsQuery {
    allContentfulWritingItems {
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
