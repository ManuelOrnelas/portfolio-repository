import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class DrawingRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts && (posts.map(({ node: post }) => (
          <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
            <img className="thumbnail" src={post.frontmatter.image.childImageSharp.fluid.src}/>
          </Link>
        )))}
      </div>
    );
  }
}

DrawingRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query DrawingRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "drawing-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 150, maxHeight: 150) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <DrawingRoll data={data} count={count} />
    )}
  />
)
