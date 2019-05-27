import React, { Component } from 'react';
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class Sculpture extends Component {
  render() {
    console.log(this.props.data.allContentfulSculptureItems.edges)
    const sculptureItems = this.props.data.allContentfulSculptureItems.edges
    return (
      <Layout>
        <div className='full-page'>
          <h1>Drawing.</h1>
        </div>
        <h1>Projects.</h1>
        <div>
          {sculptureItems.map((item) => {
            return (
              <Link to={"/sculpture/" + item.node.slug}><img src={item.node.itemPicture.resize.src} /></Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Sculpture;

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