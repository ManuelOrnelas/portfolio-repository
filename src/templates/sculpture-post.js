import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export class SculpturePostTemplate extends React.Component {
  constructor(props) {
    super(props);

    let { content, contentComponent, description, tags, title, helmet } = this.props

    this.state = {
      helmet,
      title,
      description,
      tags,
      postContent: contentComponent || Content,
      content,
    }
  }

  handleArrowClick = (event) => {
    if(typeof document !== 'undefined' && document) {
      let pageRoot = document.querySelector('div#home')

      // get the main section element
      let el = event.target.closest('.full-page')

      // find out index number of the section div relative to the parent
      let i = 0;
      while( (el = el.previousSibling) != null) i++

      // we want to scroll to the next section so we will select it
      if(pageRoot.children[i + 1]) pageRoot.children[i + 1].scrollIntoView()
    }
  }

  render() {
    return (
      <section className="section">
        {this.state.helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {this.state.title}
              </h1>
              <p>{this.state.description}</p>
              <this.state.postContent content={this.state.content} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

SculpturePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const SculpturePost = ({ data }) => {
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
      <SculpturePostTemplate
        content={page.html}
        contentComponent={HTMLContent}
        description={page.description}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${page.title}`}</title>
            <meta
              name="description"
              content={`${page.description}`}
            />
          </Helmet>
        }
        tags={page.tags}
        title={page.title}
      />
    </Layout>
  )
}

SculpturePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SculpturePost

export const pageQuery = graphql`
  query SculpturePost($id: String!, $pageKey: String!) {
    pageQuery: markdownRemark(id: { eq: $id }, frontmatter: { templateKey: { eq: $pageKey } }) {
      id
      html
      frontmatter {
        color
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }

    colorsQuery: markdownRemark(frontmatter: { fileID: { eq: "colors" } }) {
      frontmatter {
        colors
      }
    }
  }
`
