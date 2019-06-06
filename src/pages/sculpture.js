import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class Sculpture extends Component {
  render() {
    console.log(this.props.data.allContentfulSculptureItems.edges)
    const sculptureItems = this.props.data.allContentfulSculptureItems.edges
    return (
      <Layout>
        <div className="portfolio-jumbotron bg-red">
          <h1>Sculpture.</h1>
        </div>
        <div className="portfolio-list">
          <h1 className="red">Projects.</h1>
          <div className="post-list">
            {sculptureItems.map(item => {
              return (
                <Link to={"/sculpture/" + item.node.slug} key={item.node.slug}>
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

export default Sculpture

export const pageQuery = graphql`
  query allSculptureItemsQuery {
    allContentfulSculptureItems {
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
