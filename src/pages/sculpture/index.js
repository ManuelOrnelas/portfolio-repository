import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SculptureRoll from '../../components/SculptureRoll'

const SculpturePage = ({data}) => {
  let color = data.allMarkdownRemark.edges[0].node.frontmatter.pageColor.replace('\\', '');

  return (
    <Layout primaryColor={color}>
      <div className='full-page flex-center orange white-text'>
        <h1 className='huge-text'>Sculpture.</h1>
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
