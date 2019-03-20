import React from 'react'

import Layout from '../../components/Layout'
import InteriorDesignRoll from '../../components/InteriorDesignRoll'

const InteriorDesignPage = ({data}) => {
  let color = ''
  color = data.allMarkdownRemark.edges[0].node.frontmatter.pageColor.replace('\\', '');

  return (
    <Layout primaryColor={color}>
      <div className='full-page flex justifycontent-center alignitems-center bcg yellow white-text'>
        <h1 id='page-title' className='huge-text'>Interior Design.</h1>
      </div>
      <div className='full-page'>
        <div className='lateral-space'>
          <h1 className='projects'>Projects.</h1>
          <InteriorDesignRoll />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query InteriorDesignQuery {
    allMarkdownRemark(filter: { frontmatter : { templateKey: { eq: "interior-design-post"}}}) {
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

export default InteriorDesignPage
