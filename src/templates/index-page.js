import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Scrollbars } from 'react-custom-scrollbars'

import Layout from '../components/Layout'
// import Features from '../components/Features'

// Section scroll panel
import { SectionPanel } from '../components/SectionPanel';

// ICONS
import * as facebook from  '../img/social/facebook.svg'
import * as instagram from '../img/social/instagram.svg'
import * as email from '../img/social/email.svg'
import AppContext from '../components/AppContext';

function WhoAndWhy(props) {
  let { title, subtitle, description, social } = props
  let nucabeman = props.image.childImageSharp.fluid.src

  let mobile = false
  let clientWidth = typeof document !== 'undefined' ? document.documentElement.clientWidth : null;
  if (clientWidth && clientWidth < 720) mobile = true

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
      { mobile
        ? <div id='nucabeman' style={{ backgroundImage: `url(${nucabeman})`}} />
        : <img src={nucabeman} alt='NUCABÉ'></img>
      }
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

  // determine if it's a mobile device
  let viewportWidth = typeof document !== 'undefined' ? document.documentElement.clientWidth : undefined
  let mobile = false
  if (viewportWidth && viewportWidth < 720) mobile = true

  return (
    <div className='grid'>
      <div id='timeline' className='flex alignitems-center'>
        <ul className='list-reset margin-0'>
          {timeline.map((item, index) => {
            let distance = `${index * 3 + 2}rem`
            let translatePerc = -33
            if (mobile) translatePerc = `${translatePerc - (index * 100)}%`
            
            return (
              <li key={index} data-index={index} className={Number(props.chosenItem) === Number(index) ? 'active' : null}
                onClick={changeItem} style={
                  (!mobile
                  ? { top: distance }
                  : { left: distance, transform: `translateY(${translatePerc})` })
                }></li>
            )
          })}
        </ul>
      </div>
      
      <div>
        <h1 id='title' className='white-text'>Historical Line</h1>        
      </div>
      <div id='timeline-content'>
        <h1 id='achievement-title'>{timeline[props.chosenItem].title}</h1>
        <div id='achievement-list'>
          {/* <Scrollbars style={{ width: '100%', height: '10vh'}} autoHide
            universal={true} renderView={props => (
              <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
            )}> */}
          
          {timeline[props.chosenItem].achievements.map((achievement, index) => {
            return (
              <p key={index}><span>{achievement.date}</span> {achievement.description}</p>
            )
          })}
          {/* </Scrollbars> */}
        </div>
      </div>
    </div>
  )
}

function NewsItem(props) {
  return (
    <li>
      <div id='news-item'>
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
  static contextType = AppContext

  constructor(props) {
    super(props)

    // fetch all data from the props
    let { color,
      secondaryColor,
      social,
      image,
      title,
      heading,
      subheading,
      mainpitch,
      description,
      sidebarSections,
      main,
      whoandwhy,
      historicalline,
      news } = this.props

    this.state = {
      color,
      secondaryColor,
      social,
      image,
      title,
      heading,
      subheading,
      mainpitch,
      description,
      sidebarSections,
      main,
      whoandwhy,
      history: historicalline,
      historySectionSelected: 0,
      news,
      scroll: false,
      scrollPerc: undefined,
    }

    this.changeHistorySection = this.changeHistorySection.bind(this);   
  }

  convertIdToName = (id) => {
    let name = id

    // Change first char to uppercase
    name = name.charAt(0).toUpperCase() + name.substr(1)
    // Replace hyphens
    name = name.replace(new RegExp(/\-/g), ' ')

    return name
  }

  componentDidMount() {
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
    
    this.context.sidebar.setSections(sections)
  }

  changeHistorySection(newID) {
    this.setState({
      historySectionSelected: newID
    })
  }

  render() {
    // determine if it's a mobile device
    let viewportWidth = typeof document !== 'undefined' ? document.documentElement.clientWidth : undefined
    let mobile = false
    if (viewportWidth && viewportWidth < 720) mobile = true

    return (
      <div id='home' style={{ '--page-color': this.state.color }}
        onWheel={(e) => this.context.scroll.scrollbar(e.deltaY, e.target)}>
        <div className='full-page flex justifycontent-center alignitems-center bcg-color page-color'>
          <div className='flex justifycontent-center aligncontent-center'>
            <h1 id='page-title' className='huge-text text-center white-text'
              data-aos='fade-up' data-aos-delay='0'>{this.state.title}</h1>
          </div>
          
          <div id='arrow'>
            <div data-aos='fade-up'data-aos-delay='0'
              data-aos-offset='0' data-aos-anchor='#arrow'>
              <span className="arrow arrow-down clickable"
                onClick={this.context.scroll.arrowDownClick}></span>
            </div>
          </div>
        </div>

        <div id='who-and-why' className='full-page-section flex alignitems-center'>
          <div id='section-grid'>
            <SectionPanel />

            <Scrollbars style={{ width: '100%', height: 'calc(100vh - 5rem)'}} autoHide
              onScrollFrame={this.context.scroll.scrollbar} universal={true}
              renderView={props => (
                <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
              )}>
              <div className='container small'>
                <WhoAndWhy {...this.state.whoandwhy} social={this.state.social} />

                {/* <span className="arrow arrow-down clickable" */}
                    {/* onClick={this.context.scroll.arrowDownClick}></span> */}
              </div>
            </Scrollbars>

            <span className="arrow arrow-down clickable"
              onClick={this.context.scroll.arrowDownClick}></span>
          </div>
        </div>
        
        { !mobile
        ? <div id='historical-line' className='full-page-section flex alignitems-center'>
            <div id='section-grid'>
              <SectionPanel />
              
              <Scrollbars style={{ width: '100%', height: 'calc(100vh - 6rem)'}} autoHide
                onScrollFrame={this.context.scroll.scrollbar} universal={true}
                renderView={props => (
                  <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
                )}>
                <div className='container small'>
                  <HistoricalLine timeline={this.state.history}
                    chosenItem={this.state.historySectionSelected}
                    changeItem={this.changeHistorySection} />
                </div>

                <span className="arrow arrow-down clickable"
                  onClick={this.context.scroll.arrowDownClick}></span>
              </Scrollbars>
            </div>
          </div>
        : null }

        <div id='news' className='full-page-section flex alignitems-center'>
          <div id='section-grid'>
            <SectionPanel />
            
            <Scrollbars style={{ width: '100%', height: 'calc(100vh - 6rem)'}}
              onScrollFrame={this.context.scroll.scrollbar} universal={true}
              renderView={props => (
                <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
              )}>
              <div className='container small'>
                <h1 id='title' className='text-color page-color'>News</h1>
                <NewsList news={this.state.news}></NewsList>
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
    )
  }
}

IndexPageTemplate.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  sidebarSections: PropTypes.object,
  whoandwhy: PropTypes.object,
  historicalline: PropTypes.array,
  news: PropTypes.array
}

export const IndexPage = ({data}) => {
  // get graphql data
  let { colors, postColor } = data.colorsQuery.frontmatter
  let pageData = Object.assign({}, data.pageQuery.frontmatter)

  // parse post color code
  pageData.secondaryColor = postColor.replace('\\', '')

  // if this color (index) exists use it,
  // otherwise, use the first color
  if (pageData.color && colors[pageData.color - 1]) pageData.color = colors[pageData.color - 1].replace('\\', '')
  else pageData.color = colors[0].replace('\\', '')

  // add social network query data to the page data
  pageData.social = data.socialQuery.frontmatter

  return (
    <Layout primaryColor={pageData.color} postColor={pageData.postColor} isPost={false}>
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
      postColor
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
