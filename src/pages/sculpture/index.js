import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../../components/Layout'
import SculptureRoll from '../../components/SculptureRoll'

// Utils
import { scrollDownToNextSection } from '../../utils/scroll'

// Context is important
import AppContext from '../../components/AppContext';


class SculpturePage extends React.Component {
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

  // Arrow Down and Up clicks
  handleArrowDownClick = (event) => {
    if(typeof document !== 'undefined' && document) {
      // If the event target is a child of the first page section
      // The current active section is the first section
      let el = event.target.closest('.full-page')
      // Otherwise, it is a full-page section (second to ith-section)
      // Query closest page section element
      if (!el) el = event.target.closest('.full-page-section')
      
      scrollDownToNextSection(el)
    }
  }
  
  render () {
    return (
      <Layout primaryColor={this.state.pageColor} postColor={this.state.postColor} isPost={false}>
        <div id='sculpture' style={{ '--page-color': this.state.pageColor }}>
          <div className='full-page flex justifycontent-center alignitems-center bcg-color page-color'>
            <div className='flex justifycontent-center aligncontent-center'>
              <h1 id='page-title' className='text-center huge-text white-text'
                data-aos='fade-up' data-aos-delay='0'>Sculpture.</h1>
            </div>

            <div id='arrow'>
              <div data-aos='fade-up'data-aos-delay='0'
                data-aos-offset='0' data-aos-anchor='#arrow'>
                <span className="arrow arrow-down clickable"
                  onTouchStartCapture={this.handleArrowDownClick}
                  onClick={this.handleArrowDownClick}></span>
              </div>
            </div>
          </div>
          
          <div className='full-page-section'>
            <div className='container small'>
              <h1 id='title' className='text-color page-color'>Projects.</h1>
              
              <SculptureRoll />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query SculptureQuery {
    pageQuery: markdownRemark(frontmatter : { templateKey: { eq: "sculpture-post"} }) {
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

export default SculpturePage