/* eslint no-useless-escape: 0 */

import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { debounce } from 'lodash'

import AppContext from './AppContext'

// Page partials
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Utils
import { scrollDownToNextSection, scrollUpToNextSection, handleScroll } from '../utils/scroll'
import { findElementIndex } from '../utils/html'


// CSS files
import './all.scss'
import './mobile.scss'
import './animations.scss'
import 'aos/dist/aos.css'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)

    // we only want this code to be run if we're running on browser
    const isBrowser = typeof document !== 'undefined'
    const AOS = isBrowser ? require('aos') : undefined

    if(AOS) {
      AOS.init({
        duration: 1000,
      })
    }

    this.state = {
      scroll: false,
      scrollPerc: undefined,

      pageSections: [],
      activePageSection: -1,
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
      
      // Increase page section index in state and context
      this.setState({ activePageSection: this.state.activePageSection + 1 })
      
      scrollDownToNextSection(el)
    }
  }

  handleArrowUpClick = (event) => {
    // Get active section which is being shown and animate it
    let el = document.querySelector('.full-page-section.active')
    let sectionIndex = findElementIndex(el)

    // Decrease page section in state and context
    this.setState({ activePageSection: this.state.activePageSection - 1 })
    
    scrollUpToNextSection(el, !(sectionIndex > 1))
  }

  // Mouse/Trackpad scroll handling
  throttledHandleScroll = debounce((dy, target) => {
    // Get current section
    let section = target.closest('.full-page-section')
    if (!section) section = target.closest('.full-page')

    let nextActivePageSection = this.state.activePageSection

    if (dy < 0 && section.previousElementSibling) { // scroll up
      if ((this.state.scroll && this.state.scrollPerc < 5)
        || (!this.state.scroll && this.state.scrollPerc === undefined)) handleScroll(dy, section)

      nextActivePageSection--
    } else if (dy > 0 && section.nextElementSibling) { // scroll down 
      if ((!this.state.scroll && this.state.scrollPerc === undefined)
        || (this.state.scroll && this.state.scrollPerc > 95)) handleScroll(dy, section)
       
        nextActivePageSection++
    }

    // reset scroll progress
    this.setState({activePageSection: nextActivePageSection, scroll: false, scrollPerc: undefined})
  }, 100)

  handleCustomScrollbar = (event) => {
    let newTop = event.top

    if (!this.state.scroll) this.setState({
      scroll: true,
      scrollPerc: newTop * 100,
    })
  }

  // Sidebar sections
  convertIdToName = (id) => {
    let name = id

    // Change first char to uppercase
    name = name.charAt(0).toUpperCase() + name.substr(1)
    // Replace hyphens
    name = name.replace(new RegExp(/\-/g), ' ')

    return name
  }

  // set page sections
  getPageSections = () => {
    let htmlSections = document.querySelectorAll('.full-page-section')
    htmlSections = Array.prototype.slice.call(htmlSections)
    
    let sections = []
    for (let section of htmlSections) {
      sections.push({
        originalID: section.id,
        element: section,
        name: this.convertIdToName(section.id),
        active: section.classList.contains('active') ? true : false,
      })
    }

    return sections
  }

  setPageSections = (sections) => {
    this.setState({pageSections: sections && sections.length ?  sections : this.getPageSections() }) 
  }

  // set active page section
  setActivePageSection = (activePage) => this.setState({activePageSection: activePage})

  render() {
    let color = ''
    if (this.props.primaryColor) color = this.props.primaryColor

    let contextValue = {
      animatePages: true,
      scroll: {
        arrowDownClick: this.handleArrowDownClick,
        arrowUpClick: this.handleArrowUpClick,
        scrollbar: this.throttledHandleScroll,
      },
      sidebar : {
        sections: this.state.pageSections,
        setSections: this.setPageSections,
        activeSection: this.state.activePageSection,
        setActiveSection: this.setActivePageSection,
      }
    }

    // check if the visited page is the first page visited on this session
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // let's determine if the current page is the first page visited
      // on this session 
      if (window.sessionStorage.getItem('firstPage') === 'false') contextValue.animatePages = false
      else {
        // change browser session storage
        window.sessionStorage.setItem('firstPage', false)

        contextValue.animatePages = true
      }
    }

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{this.props.siteMetadata.title}</title>
          <meta
            name="description"
            content={this.props.siteMetadata.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />

          <link href="https://fonts.googleapis.com/css?family=Poppins:300,500,600" rel="stylesheet" />

          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={this.props.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <AppContext.Provider value={contextValue}>
          <Navbar color={color} postColor={this.props.postColor} isPost={this.props.isPost} />
          <div id='page-content' className='overflowx-hidden'>{this.props.children}</div>
          {this.props.footer
            ? <Footer color={color} />
            : null
          }
        </AppContext.Provider>
      </div>
    )
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <TemplateWrapper {...props} siteMetadata={data.site.siteMetadata}/>
    )}
  />
)