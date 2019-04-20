import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const GraphicsDesignPostTemplate = ({
  description,
  image,
  details,
  title,
  helmet,
}) => {

  return (
    <div className='post full-page-section'>
      <section className='container small flex'>
        {helmet || ''}
        <div>
          <div className="flex justifycontent-center aligncontent-center">
            <div>
              <h1 className="title fontsize-5">
                {title}
              </h1>
              <p id='description' className='fontsize-2'>{description}</p>
              <div id='details'>
                {details && details.split('. ').map(item => {
                  return (
                    <p className='fontsize-2'>{item}</p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex justifycontent-center aligncontent-center'>
            <img src={image.childImageSharp.fluid.src} alt="Hello" />
          </div>
        </div>
      </section>
    </div>
  )
}

GraphicsDesignPostTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const GraphicsDesignPost = ({ data }) => {
  // get graphql data
  let { colors, postColor } = data.colorsQuery.frontmatter
  let post = data.postQuery.frontmatter

  // parse post color code
  postColor = postColor.replace('\\', '')

  // if this color (index) exists use it,
  // otherwise, use the first color
  let pageColor = ''
  if (post.color && colors[post.color - 1]) pageColor = colors[post.color - 1].replace('\\', '')
  else pageColor = colors[0].replace('\\', '')

  return (
    <Layout primaryColor={pageColor} postColor={postColor} isPost={true}>
      <GraphicsDesignPostTemplate
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
      frontmatter {
        color
        date(formatString: "MMMM DD, YYYY")
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
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
        postColor
      }
    }
  }
`
