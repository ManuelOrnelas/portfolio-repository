import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { debounce } from 'lodash'

import Layout from '../components/Layout'
// import Features from '../components/Features'

import { scrollUpToNextSection, scrollDownToNextSection } from '../utils/scroll'

import * as facebook from  '../img/social/facebook.svg'
import * as instagram from '../img/social/instagram.svg'
import * as email from '../img/social/email.svg'

function WhoAndWhy(props) {
  let { title, subtitle, description, social } = props
  let nucabeman = props.image.childImageSharp.fluid.src

  return (
    <div className='grid'>
      <div id='bio' className='flex alignitems-center'>
        <div className=''>
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
      </div>
      <img src={nucabeman} alt='NUCABÉ'></img>
    </div>  
  )
}

function HistoricalLine(props) {
  let timeline = props.timeline

  let changeItem = (e) => {
    // holds next active element
    let newElementID = e.target.dataset.index
    props.changeItem(newElementID)
  }

  return (
    <div className='grid'>
      <div id='timeline' className='flex alignitems-center'>
        <ul className='list-reset margin-0'>
          {timeline.map((item, index) => {
            let distanceFromTop = `${index * 3 + 2}rem`
            
            return (
              <li key={index} data-index={index} className={Number(props.chosenItem) === Number(index) ? 'active' : null}
                onClick={changeItem} style={{top: distanceFromTop}}></li>
            )
          })}
        </ul>
      </div>
      
      <div id='title' className='white-text'>Historical Line</div>
      <div id='timeline-content'>
        <h1 id='achievement-title'>{timeline[props.chosenItem].title}</h1>
        <div id='achievement-list'>
          {timeline[props.chosenItem].achievements.map((achievement, index) => {
            return (
              <p key={index}>{achievement.date} {achievement.description}</p>
            )
          })}
        </div>
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
      historicalline,
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
      history: historicalline,
      historySectionSelected: 0,
      news
    }

    this.changeHistorySection = this.changeHistorySection.bind(this);   
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

  throttledHandleScroll = debounce((dy, target) => { this.handleScroll(dy, target) }, 100)

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

  changeHistorySection(newID) {
    this.setState({
      historySectionSelected: newID
    })
  }
  
  render() {
    return (
      <div id='home' style={{ '--page-color': this.state.color }}
        onWheel={(e) => this.throttledHandleScroll(e.deltaY, e.target)}>
        <div className='full-page flex justifycontent-center alignitems-center bcg-color page-color'>
          <div className='flex justifycontent-center aligncontent-center'>
            <h1 id='page-title' className='huge-text text-center white-text'
              data-aos='fade-up' data-aos-delay='0'>{this.state.title}</h1>
          </div>
          
          <div id='arrow'>
            <div data-aos='fade-up'data-aos-delay='0'
              data-aos-offset='0' data-aos-anchor='#arrow'>
              <span className="arrow arrow-down clickable"
                onClick={this.handleArrowDownClick}></span>
            </div>
          </div>
        </div>

        <div id='who-and-why' className='full-page-section flex alignitems-center'>
          <div className='container small'>
            <WhoAndWhy {...this.state.whoandwhy} social={this.state.social} />
            
            <div>
              <div data-aos='fade-up' data-aos-delay='200'
                data-aos-offset='0' data-aos-anchor='who-and-why'>
                <span className="arrow arrow-down bottom-center clickable"
                  onClick={this.handleArrowDownClick}></span>
              </div>
            </div>
          </div>
        </div>

        <div id='historical-line' className='full-page-section flex alignitems-center'>
          <div className='container small'>
            <HistoricalLine timeline={this.state.history}
              chosenItem={this.state.historySectionSelected}
              changeItem={this.changeHistorySection} />

            <div>
              <div data-aos='fade-up' data-aos-delay='0'
                data-aos-offset='0' data-aos-anchor='#historical-line'>
                <span className="arrow arrow-down bottom-center clickable"
                  onClick={this.handleArrowDownClick}></span>
              </div>
            </div>
          </div>
        </div>

        <div id='news' className='full-page-section flex alignitems-center'>
          <div className='container small'>
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
  historicalline: PropTypes.array,
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
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      historicalline {
        title
        achievements {
          date
          description
        }
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
