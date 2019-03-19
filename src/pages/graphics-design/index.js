import React from 'react'

import Layout from '../../components/Layout'
import GraphicsDesignRoll from '../../components/GraphicsDesignRoll'

const GraphicsDesignPage = ({data}) => {
  let color
  if(data.allMarkdownRemark.edges[0].node) color = data.allMarkdownRemark.edges[0].node.frontmatter.pageColor.replace('\\', '');

  return (
    <Layout primaryColor={color}>
      <div className='full-page flex justifycontent-center alignitems-center yellow white-text'>
        <h1 className='huge-text'>Graphics Design.</h1>
      </div>
      <div className='full-page'>
        <div className='lateral-space'>
          <h1 className='projects'>Projects.</h1>
          <GraphicsDesignRoll />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GraphicsDesignQuery {
    allMarkdownRemark(filter: { frontmatter : { templateKey: { eq: "graphics-design-post"}}}) {
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

export default GraphicsDesignPage
