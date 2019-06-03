import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class Drawing extends Component {
  render() {
    console.log(this.props.data.allContentfulDrawingItems.edges)
    const drawingItems = this.props.data.allContentfulDrawingItems.edges
    return (
      <Layout>
        <div className="portfolio-jumbotron bg-orange">
          <h1>Drawing.</h1>
        </div>
        <div className="portfolio-list">
          <h1 className="orange">Projects.</h1>
          <div className="post-list">
            {drawingItems.map(item => {
              return (
                <Link to={"/drawing/" + item.node.slug} key={item.node.slug}>
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

export default Drawing

export const pageQuery = graphql`
  query allDrawingItemsQuery {
    allContentfulDrawingItems {
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
