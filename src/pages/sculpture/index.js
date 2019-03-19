import React from 'react'

import Layout from '../../components/Layout'
import SculptureRoll from '../../components/SculptureRoll'

const SculpturePage = ({data}) => {
  let color
  if (data.allMarkdownRemark.edges[0].node) color = data.allMarkdownRemark.edges[0].node.frontmatter.pageColor.replace('\\', '');

  return (
    <Layout primaryColor={color}>
      <div className='full-page flex justifycontent-center alignitems-center bcg orange white-text'>
        <h1 id='page-title' className='huge-text margin-0'>Sculpture.</h1>
      </div>
      <div className='full-page'>
        <div className='lateral-space'>
          <h1 className='projects'>Projects.</h1>
          <SculptureRoll />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SculptureQuery {
    allMarkdownRemark(filter: { frontmatter : { templateKey: { eq: "sculpture-post"}}}) {
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

export default SculpturePage