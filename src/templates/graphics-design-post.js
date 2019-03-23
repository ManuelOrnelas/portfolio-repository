import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GraphicsDesignPostTemplate = ({
  content,
  contentComponent,
  description,
  image,
  details,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light"
              data-aos='fade-up' data-aos-delay='0'>
              {title}
            </h1>
            <img src={image.childImageSharp.fluid.src} alt="Hello" />
            <p>{description}</p>
            <p>{details}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

GraphicsDesignPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const GraphicsDesignPost = ({ data }) => {
  // get graphql data
  let { colors } = data.colorsQuery.frontmatter
  let post = data.postQuery.frontmatter

  // if this color (index) exists use it,
  // otherwise, use the first color
  let pageColor = ''
  if (post.color && colors[post.color - 1]) pageColor = colors[post.color - 1].replace('\\', '')
  else pageColor = colors[0].replace('\\', '')

  return (
    <Layout primaryColor={pageColor}>
      <GraphicsDesignPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.description}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.title}`}</title>
            <meta
              name="description"
              content={`${post.description}`}
            />
          </Helmet>
        }
        title={post.title}
        image={post.image}
        details={post.details}
      />
    </Layout>
  )
}

GraphicsDesignPost.propTypes = {
  data: PropTypes.shape({
    postQuery: PropTypes.object,
    colorsQuery: PropTypes.object,
  }),
}

export default GraphicsDesignPost

export const pageQuery = graphql`
  query GraphicsDesignPost($id: String!, $pageKey: String!) {
    postQuery: markdownRemark(id: { eq: $id }, frontmatter: {templateKey: {eq: $pageKey} }) {
      id
      html
      frontmatter {
        color
        date(formatString: "MMMM DD, YYYY")
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              src
            }
          }
        }
        details
      }
    }

    colorsQuery: markdownRemark(frontmatter: { fileID: { eq: "colors"} }) {
      frontmatter {
        colors
      }
    }
  }
`
