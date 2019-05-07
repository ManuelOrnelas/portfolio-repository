import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../../components/Layout'
import ProductDesignRoll from '../../components/ProductDesignRoll'

// Context matters
import AppContext from '../../components/AppContext'

class ProductDesignPage extends React.Component {
  static contextType = AppContext
  
  constructor(props) {
    super(props)
    
    // get graphql data
    let { colors, postColor } = this.props.data.colorsQuery.frontmatter
    let page = this.props.data.pageQuery.frontmatter

    postColor = postColor.replace('\\', '')

    // if this color (index) exists use it,
    // otherwise, use the first color
    let pageColor = ''
    if (page.color && colors[page.color - 1]) pageColor = colors[page.color - 1].replace('\\', '')
    else pageColor = colors[0].replace('\\', '')

    this.state = {
      pageColor,
      postColor
    }
  }
  
  render() {
    return (
      <Layout primaryColor={this.state.pageColor} postColor={this.state.postColor} isPost={false}>
        <div id='product-design' style={{ '--page-color': this.state.pageColor }}>
          <div
            className='full-page flex justifycontent-center alignitems-center bcg-color page-color'>
            <div className='flex justifycontent-center alignitems-center'>
              <h1 id='page-title' className='text-center huge-text white-text'
                data-aos='fade-up' data-aos-delay='0'>Product.</h1>
            </div>

            <div id='arrow'>
              <div data-aos='fade-up'data-aos-delay='0'
                data-aos-offset='0' data-aos-anchor='#arrow'>
                <span className="arrow arrow-down clickable"
                  onClick={this.context.scroll.arrowDownClick}></span>
              </div>
            </div>
          </div>

          <div className='full-page-section'>
            <div className='container small'>
              <h1 id='title' className='text-color page-color'>Projects.</h1>
              
              <ProductDesignRoll />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query ProductDesignQuery {
    pageQuery: markdownRemark(frontmatter : { templateKey: { eq: "product-design-post"} }) {
      frontmatter {
        color
      }
    }

    colorsQuery: markdownRemark(frontmatter: { fileID: { eq: "colors" } }) {
      frontmatter {
        colors
        postColor
      }
    }
  }
`

export default ProductDesignPage
