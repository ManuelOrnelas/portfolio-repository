import React from 'react'

import Layout from '../../components/Layout'
import ProductDesignRoll from '../../components/ProductDesignRoll'

const ProductDesignPage = ({data}) => {
  let color = data.allMarkdownRemark.edges[0].node.frontmatter.pageColor.replace('\\', '');

  return (
    <Layout primaryColor={color}>
      <div className='full-page flex justifycontent-center alignitems-center yellow white-text'>
        <h1 className='huge-text'>Product Design.</h1>
      </div>
      <div className='full-page'>
        <div className='lateral-space'>
          <h1 className='projects'>Projects.</h1>
          <ProductDesignRoll />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProductDesignQuery {
    allMarkdownRemark(filter: { frontmatter : { templateKey: { eq: "product-design-post"}}}) {
      edges {
        node {
          frontmatter {
            pageColor
          }
        }
      }
    }
  }
`

export default ProductDesignPage
