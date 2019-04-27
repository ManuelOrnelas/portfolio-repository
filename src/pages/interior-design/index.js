import { graphql } from 'gatsby'
import { debounce } from 'lodash'
import React from 'react'

import Layout from '../../components/Layout'
import InteriorDesignRoll from '../../components/InteriorDesignRoll'

import { handleScroll, scrollDownToNextSection } from '../../utils/scroll'

class InteriorDesignPage extends React.Component {
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
  
  /**
   * @param {React.WheelEvent} event
   */
  handleArrowDownClick = (event) => {
    if(typeof document !== 'undefined' && document) {
      // get the main section element
      let el = event.target.closest('.full-page')
      if (!el) el = event.target.closest('.full-page-section')

      scrollDownToNextSection(el)
    }
  }

  throttledHandleScroll = debounce((dy, target) => {
    // handle scroll if the section has been scrolled
    if (dy < 0 && this.state.scroll && this.state.scrollPerc < 5) handleScroll(dy, target) // trying to scroll up in any section
    else if (dy < 0 && this.state.scroll === false && this.state.scrollPerc === undefined) handleScroll(dy, target)
    else if (dy > 0 && this.state.scroll === false && this.state.scrollPerc === undefined) handleScroll(dy, target) // trying to scroll down in first section
    else if (dy > 0 && this.state.scroll && this.state.scrollPerc > 94) handleScroll(dy, target)

    // reset scroll progress
    this.setState({scroll: false, scrollPerc: undefined})
  }, 100)

  handleCustomScrollbar = (event) => {
    let newTop = event.top

    if (!this.state.scroll) this.setState({
      scroll: true,
      scrollPerc: newTop * 100,
    })
  }

  render() {
    return (
      <Layout primaryColor={this.state.pageColor} postColor={this.state.postColor} isPost={false}>
        <div id='interior-design' style={{ '--page-color': this.state.pageColor }}
          onWheel={(e) => this.throttledHandleScroll(e.deltaY, e.target)}>
          <div
            className='full-page flex justifycontent-center alignitems-center bcg-color page-color'>
            <div className='flex justifycontent-center alignitems-center'>
              <h1 id='page-title' className='text-center huge-text white-text'
                data-aos='fade-up' data-aos-delay='0' data-aos-offset='0'>Interior.</h1>
            </div>

            <div id='arrow'>
              <div data-aos='fade-up'data-aos-delay='0'
                data-aos-offset='0' data-aos-anchor='#arrow'>
                <span className="arrow arrow-down clickable"
                  onClick={this.handleArrowDownClick}></span>
              </div>
            </div>
          </div>

          <div className='full-page-section'>
            <div className='container small'>
              <h1 className='projects text-color page-color'>Projects.</h1>
              
              <InteriorDesignRoll />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query InteriorDesignQuery {
    pageQuery: markdownRemark(frontmatter : { templateKey: { eq: "interior-design-post"} }) {
      frontmatter {
        color
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

export default InteriorDesignPage
