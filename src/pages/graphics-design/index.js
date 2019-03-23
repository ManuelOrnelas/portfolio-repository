import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import GraphicsDesignRoll from '../../components/GraphicsDesignRoll'

class GraphicsDesignPage extends React.Component {
  constructor(props) {
    super(props)
    
    // get graphql data
    let { colors } = this.props.data.colorsQuery.frontmatter
    let page = this.props.data.pageQuery.frontmatter

    // if this color (index) exists use it,
    // otherwise, use the first color
    let pageColor = ''
    if (page.color && colors[page.color - 1]) pageColor = colors[page.color - 1].replace('\\', '')
    else pageColor = colors[0].replace('\\', '')

    this.state = {
      pageColor
    }
  }
  
  handleArrowClick = (event) => {
    if(typeof document !== 'undefined' && document) {
      let pageRoot = document.querySelector('div#graphicsdesign-page')

      // get the main section element
      let el = event.target.closest('.full-page')

      // find out index number of the section div relative to the parent
      let i = 0;
      while( (el = el.previousSibling) != null) i++

      // we want to scroll to the next section so we will select it
      console.log(pageRoot.children[i + 1])
      if(pageRoot.children[i + 1]) pageRoot.children[i + 1].scrollIntoView()
    }
  }

  render() {
    return (
      <Layout primaryColor={this.state.pageColor}>
        <div id='graphicsdesign-page'>
          <div
            className='full-page'
            style={{backgroundColor: this.state.pageColor}}>
            <div className='flex justifycontent-center aligncontent-center'>
              <h1 id='page-title' className='text-center huge-text white-text'
                data-aos='fade-up' data-aos-delay='0'>Graphics Design.</h1>
            </div>

            <div data-aos='fade-up' data-aos-delay='0' data-aos-offset='0'>
              <span className="arrow arrow-down bottom-center clickable" onClick={this.handleArrowClick}></span>
            </div>
          </div>

          <div className='full-page'>
            <div className='lateral-space'>
              <h1 className='projects'>Projects.</h1>
              <GraphicsDesignRoll />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query GraphicsDesignQuery {
    pageQuery: markdownRemark(frontmatter : { templateKey: { eq: "graphics-design-post"} }) {
      frontmatter {
        color
      }
    }

    colorsQuery: markdownRemark(frontmatter: { fileID: { eq: "colors"} }) {
      frontmatter {
        colors
      }
    }
  }
`

export default GraphicsDesignPage
