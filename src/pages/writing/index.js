import React from 'react'

import Layout from '../../components/Layout'
import WritingRoll from '../../components/WritingRoll'

const WritingPage = ({data}) => {
  // get graphql data
  let colors = data.colorsQuery.frontmatter.colors
  let page = data.pageQuery.frontmatter

  // if this color (index) exists use it,
  // otherwise, use the first color
  let pageColor = ''
  if (page.color && colors[page.color - 1]) pageColor = colors[page.color - 1].replace('\\', '')
  else pageColor = colors[0].replace('\\', '')

  return (
    <Layout primaryColor={pageColor}>
      <div
        className='full-page flex justifycontent-center alignitems-center white-text'
        style={{backgroundColor: pageColor}}>
        <h1 id='page-title' className='huge-text text-center'>Writing.</h1>
      </div>
      <div className='full-page'>
        <div className='lateral-space'>
          <h1 className='projects'>Projects.</h1>
          <WritingRoll />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query WritingQuery {
    pageQuery: markdownRemark(frontmatter : { templateKey: { eq: "writing-post"} }) {
      frontmatter {
        color
      }
    }
    
    colorsQuery: markdownRemark(frontmatter: { fileID: { eq: "colors" } }) {
      frontmatter {
        colors
      }
    }
  }
`


export default WritingPage;
