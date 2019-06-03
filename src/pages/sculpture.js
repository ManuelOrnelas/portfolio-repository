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
        <div className="full-page portfolio-main red">
          <h1>Sculpture.</h1>
        </div>
        <div className="min-full-height">
          <h1>Projects.</h1>
          {sculptureItems.map(item => {
            return (
              <Link to={"/sculpture/" + item.node.slug} key={item.node.slug}>
                <img src={item.node.itemPicture.resize.src} alt="item"/>
              </Link>
            )
          })}
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
