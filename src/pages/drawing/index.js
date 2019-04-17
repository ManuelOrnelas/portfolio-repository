import { graphql } from 'gatsby'
import { debounce } from 'lodash'
import React from 'react'

import Layout from '../../components/Layout'
import DrawingRoll from '../../components/DrawingRoll'

import { scrollDownToNextSection, scrollUpToNextSection } from '../../utils/scroll'


class DrawingPage extends React.Component {
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

  throttledHandleScroll = debounce((dy, target) => { this.handleScroll(dy, target) }, 500)

  /**
   * @param {number} dy Represents the scroll velocity
   * @param {HTMLElement} target Element 
   */
  handleScroll = (dy, target) => {
    // dY > 0 means user is trying to scroll DOWN
    // dY < 0 means user is trying to scroll UP
    let up = undefined
    if (dy > 0) up = false
    else up = true

    let activeSections = document.querySelectorAll('.full-page-section.active')
    
    if (up && activeSections.length) {
      // let's deactivate the last one and make it slide down
      scrollUpToNextSection(activeSections[activeSections.length - 1], !(activeSections.length > 1))
    } else if (!up) {
      let el = target.closest('.full-page')
      // if event's target was not .full-page div then closest will be null
      // if it wasn't .full-page it has to be .full-page-section
      if (!el) el = target.closest('.full-page-section')
      
      scrollDownToNextSection(el)
    }
  }

  render() {
    return (
      <Layout primaryColor={this.state.pageColor}>
        <div id='drawing' style={{ '--page-color': this.state.pageColor }}
          onWheel={(e) => this.throttledHandleScroll(e.deltaY, e.target)}>
          <div
            className='full-page flex justifycontent-center alignitems-center bcg-color page-color'>
            <div className='flex justifycontent-center aligncontent-center'>
              <h1 id='page-title' className='text-center huge-text white-text'
                data-aos='fade-up' data-aos-delay='0'>Drawing.</h1>
            </div>
  
            <div id='arrow'>
              <div data-aos='fade-up'data-aos-delay='0'
                data-aos-offset='0' data-aos-anchor='#arrow'>
                <span className="arrow arrow-down clickable"
                  onClick={this.handleArrowDownClick}></span>
              </div>
            </div>
          </div>
  
          <div className='full-page-section flex alignitems-center'>
            <div className='container'>
              <h1 className='projects text-color page-color'>Projects.</h1>
              <DrawingRoll />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query DrawingQuery {
    pageQuery: markdownRemark(frontmatter : { templateKey: { eq: "drawing-post"} }) {
      id
      fields {
        slug
      }
      frontmatter {
        color
        templateKey
        title
        date(formatString: "MMMM DD, YYYY")
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

export default DrawingPage
