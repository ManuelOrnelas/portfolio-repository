import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import AppContext from './AppContext'

// Page partials
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
  }

  render() {
    let color = ''
    if (this.props.primaryColor) color = this.props.primaryColor

    let contextValue = {
      animatePages: true,
    }

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