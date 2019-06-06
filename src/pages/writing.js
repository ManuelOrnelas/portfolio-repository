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
        <div className="portfolio-jumbotron bg-purple">
          <h1>Writing.</h1>
        </div>
        <div className="portfolio-list">
          <h1 className="purple">Projects.</h1>
          <div className="post-list">
            {writingItems.map(item => {
              return (
                <Link to={"/writing/" + item.node.slug} key={item.node.slug}>
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

export default Writing

export const pageQuery = graphql`
  query allWritingItemsQuery {
    allContentfulWritingItems {
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
