import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'

import * as facebook from  '../img/social/facebook.svg'
import * as instagram from '../img/social/instagram.svg'
import * as email from '../img/social/email.svg'

function WhoAndWhy(props) {
  let { title, subtitle, description, social } = props

  return (
    <div>
      <h1 id='title' className='text-color page-color margin-0'>{title}</h1>
      <p className='grey fontsize-3'>{subtitle}</p>
      <p className='grey fontsize-2 fontweight-light'>{description}</p>
      <div id='social' className='flex'>
        <a id='email' href={'mailto:' + social.email} target='_blank norefferer'>
          <img alt='Send Nucabé an email' src={email} className='w-1 h-1'></img>
        </a> 
        <a id='instagram' href={social.instagram} target='_blank norefferer'>
          <img alt='Nucabé Instagram page' src={instagram} className='w-1 h-1'></img>
        </a>
        <a id='facebook' href={social.facebook} target='_blank norefferer'>
          <img alt='Nucabé Facebook page' src={facebook} className='w-1 h-1'></img>
        </a>
      </div>
    </div>  
  )
}

function NewsItem(props) {
  return (
    <li>
      <div id='news-item' className='flex'>
        <img alt={props.data.title}
          src={props.data.thumbnail.childImageSharp.fluid.src}
          className='fit-contain'></img>
        <div id='info' className='flex flex-column'>
          <p id='date' className='margin-0 fontweight-light'>{props.data.date}</p>
          <h1 className='margin-0 fontweight-normal'>{props.data.title}</h1>
        </div>
        <div id='description' className='flex'>
          <p className='margin-0 fontweight-light'>{props.data.description}</p>
        </div>
      </div>

      <hr className='grey rounded margin-tb-2 w-85'></hr>
    </li>
  )
}

function NewsList(props) {
  const newsItems = props.news.map((item, index) => {
    return (
      <NewsItem data={item} key={index}></NewsItem>
    )
  })

  return (
    <ul id='news' className='list-reset'>
      {newsItems}
    </ul>
  )
}

export class IndexPageTemplate extends React.Component {
  constructor(props) {
    super(props)

    // fetch all data from the props
    let { color,
      social,
      image,
      title,
      heading,
      subheading,
      mainpitch,
      description,
      main,
      whoandwhy,
      news } = this.props

    this.state = {
      color,
      secondaryColor: '',
      social,
      image,
      title,
      heading,
      subheading,
      mainpitch,
      description,
      main,
      whoandwhy,
      news
    }
  }

  handleArrowDownClick = (event) => {
    if(typeof document !== 'undefined' && document) {
      let pageRoot = document.querySelector('div#home'),
        navbar = document.querySelector('nav')
      // get the main section element
      let el = event.target.closest('.full-page')
      if (!el) el = event.target.closest('.full-page-section')

      // find out index number of the section div relative to the parent
      let i = 0;
      while( (el = el.previousSibling) != null) i++

      // we want to scroll to the next section so we will select it
      // first, verify if section exists
      if(pageRoot.children[i + 1]) {
        // slide up next section
        pageRoot.children[i+1].classList.toggle('active')
        
        // if the navbar has its arrow disabled, enable it
        let arrow = navbar.querySelector('#navbar-arrow')
        setTimeout(() => {
          arrow.classList.add('show')
        }, 750)
      }
    }
  }

  handleScroll = (event) => {
    // deltaY > 0 means user is trying to scroll DOWN
    // deltaY < 0 means user is trying to scroll UP
    let up = undefined
    if (event.deltaY > 0) up = false
    else up = true

    let activeSections = document.querySelectorAll('.full-page-section.active')
    if (up && activeSections.length) {
      // let's deactivate the last one and make it slide down
      activeSections[activeSections.length-1].classList.remove('active')
      console.log("Just hidden ", activeSections[activeSections.length - 1])
      
      if (!(activeSections.length > 1)) {
        let arrow = document.querySelector('#navbar-arrow')
        arrow.classList.toggle('show')
      }
    } else {
      
    }
  }

  render() {
    return (
      <div id='home' style={{ '--page-color': this.state.color }} onWheel={this.handleScroll}>
        <div className='full-page flex justifycontent-center alignitems-center bcg-color page-color'>
          <div className='flex justifycontent-center aligncontent-center'>
            <h1 id='page-title' className='huge-text text-center white-text'
              data-aos='fade-up' data-aos-delay='0'>{this.state.title}</h1>
          </div>
          
          <div id='arrow'>
            <div data-aos='fade-up'data-aos-delay='0'
              data-aos-offset='0' data-aos-anchor='#arrow'>
              <span className="arrow arrow-down bottom-center clickable"
                onClick={this.handleArrowDownClick}></span>
            </div>
          </div>
        </div>

        <div id='who-and-why' className='full-page-section flex alignitems-center'>
          <div className='container flex'>
            <WhoAndWhy {...this.state.whoandwhy} social={this.state.social} />
            
            <div>
              <div data-aos='fade-up' data-aos-delay='0'
                data-aos-offset='0' data-aos-anchor='#arrow'>
                <span className="arrow arrow-down bottom-center clickable"
                  onClick={this.handleArrowDownClick}></span>
              </div>
            </div>
          </div>
        </div>

        <div id='historical-line' className='full-page-section flex alignitems-center'>
          <div className='container'>
            <div id='timeline'>
              
            </div>
            <div>
              <h1 id='title' className='white-text'>Historical line</h1>
              <h2>Pre-Academic</h2>
              <ul>
                <li>1998 Born in Terceira Island</li>
                <li>2016 Participation in MITO's art installation exhibition</li>
                <li>2016 Changed Course from Sculpture to Equipment Design</li>
                <li>2017 Sent 2 Medals for the New Ideas in Medallic Sculpture exhibition in Japan</li>
              </ul>
            </div>

            <div>
              <div data-aos='fade-up' data-aos-delay='0'
                data-aos-offset='0' data-aos-anchor='#arrow'>
                <span className="arrow arrow-down bottom-center clickable"
                  onClick={this.handleArrowDownClick}></span>
              </div>
            </div>
          </div>
        </div>

        <div id='news' className='full-page-section flex alignitems-center'>
          <div className='container'>
            <h1 id='title' className='text-color page-color'>News</h1>
            <NewsList news={this.state.news}></NewsList>
          </div>
        </div>
      </div>
    )
  }
}

IndexPageTemplate.propTypes = {
  color: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  whoandwhy: PropTypes.object,
  news: PropTypes.array
}

export const IndexPage = ({data}) => {
  // get graphql data
  let { colors } = data.colorsQuery.frontmatter
  let pageData = Object.assign({}, data.pageQuery.frontmatter)

  // if this color (index) exists use it,
  // otherwise, use the first color
  if (pageData.color && colors[pageData.color - 1]) pageData.color = colors[pageData.color - 1].replace('\\', '')
  else pageData.color = colors[0].replace('\\', '')

  // add social network query data to the page data
  pageData.social = data.socialQuery.frontmatter

  return (
    <Layout primaryColor={pageData.color}>
      <IndexPageTemplate
        {...pageData}
      /> 
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate($pageKey: String!) {
  pageQuery: markdownRemark(frontmatter: {templateKey: {eq: $pageKey}}) {
    frontmatter {
      color
      title
      image {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heading
      subheading
      description
      whoandwhy {
        title
        subtitle
        description
      }
      news {
        title
        thumbnail {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        date
        description
      }
    }
  }

  colorsQuery: markdownRemark(frontmatter: { fileID: { eq: "colors" } }) {
    frontmatter {
      colors
    }
  }

  socialQuery: markdownRemark(frontmatter: { fileID: { eq: "social" } }) {
    frontmatter {
      email
      facebook
      instagram
    }
  }
}
`
