import React, { Component } from 'react';
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class InteriorDesign extends Component {
  render() {
    console.log(this.props.data.allContentfulInteriorDesignItems.edges)
    const interiorDesignItems = this.props.data.allContentfulInteriorDesignItems.edges
    return (
      <Layout>
        <div>
          <h1>InteriorDesign</h1>
          {interiorDesignItems.map((item) => {
            return (
              <div>
                <Link to={"/interior-design/" + item.node.slug}><img src={item.node.itemPicture.resize.src} /></Link>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default InteriorDesign;

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