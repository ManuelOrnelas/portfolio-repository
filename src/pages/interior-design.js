import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

class InteriorDesign extends Component {
  render() {
    console.log(this.props.data.allContentfulInteriorDesignItems.edges)
    const interiorDesignItems = this.props.data.allContentfulInteriorDesignItems.edges
    return (
      <Layout>
        <div className="portfolio-jumbotron bg-green">
          <h1>Interior.</h1>
        </div>
        <div className="portfolio-list">
          <h1 className="green">Projects.</h1>
          <div className="post-list">
            {interiorDesignItems.map(item => {
              return (
                <Link to={"/interior-design/" + item.node.slug} key={item.node.slug}>
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
