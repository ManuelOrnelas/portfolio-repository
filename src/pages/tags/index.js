import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout'

const TagsPage = ({data}) => {
  // get graphql data
  let { colors } = data.colorsQuery.frontmatter
  let page = data.pageQuery.frontmatter
  let { title } = data.site.siteMetadata
  let { group } = data.allMarkdownRemark

  // if this color (index) exists use it,
  // otherwise, use the first color
  let pageColor = ''
  if (page.color && colors[page.color - 1]) pageColor = colors[page.color - 1].replace('\\', '')
  else pageColor = colors[0].replace('\\', '')
  
  return (
    <Layout primaryColor={pageColor}>
      <section className="section">
        <Helmet title={`Tags | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h1 className="title is-size-2 is-bold-light">Tags</h1>
              <ul className="taglist">
                {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    pageQuery: markdownRemark(frontmatter : { templateKey: { eq: "sculpture-post"} }) {
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
