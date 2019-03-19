import React from 'react'

import Layout from '../../components/Layout'
import DrawingRoll from '../../components/DrawingRoll'

const DrawingPage = ({data}) => {
  let color
  if (data.allMarkdownRemark.edges[0].node) color = data.allMarkdownRemark.edges[0].node.frontmatter.pageColor.replace('\\', '');

  return (
    <Layout primaryColor={color}>
      <div className='full-page flex-center yellow white-text'>
        <h1 className='huge-text'>Drawing.</h1>
      </div>
      <div className='full-page'>
        <div className='lateral-space'>
          <h1 className='projects'>Projects.</h1>
          <DrawingRoll />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query DrawingQuery {
    allMarkdownRemark(filter: { frontmatter : { templateKey: { eq: "drawing-post"}}}) {
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

export default DrawingPage
