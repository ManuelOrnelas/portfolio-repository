import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'

function NewsItem(props) {
  return (
    <li>
      <div id='news-info' className='flex'>
        <img alt={props.data.title}
          src={props.data.thumbnail.childImageSharp.fluid.src}
          className='fit-contain'></img>
        <div className='flex flex-column'>
          <p id='date' className='margin-0'>{props.data.date}</p>
          <h1 className='margin-0'>{props.data.title}</h1>
        </div>
        <div id='description' className='flex'>
          <p className='margin-0'>{props.data.description}</p>
        </div>
      </div>

      <hr className='grey rounded margin-tb-2 w-85'></hr>
    </li>
  )
}

function NewsList(props) {
  const newsItems = props.news.map(item => {
    return (
      <NewsItem data={item}></NewsItem>
    )
  })

  return (
    <ul className='list-reset'>
      {newsItems}
    </ul>
  )
}

export class IndexPageTemplate extends React.Component {
  constructor(props) {
    super(props)

    // fetch all data from the props
    let { color,
      image,
      title,
      heading,
      subheading,
      mainpitch,
      description,
      intro,
      main,
      news } = this.props

    this.state = {
      color,
      secondaryColor: '',
      image,
      title,
      heading,
      subheading,
      mainpitch,
      description,
      intro,
      main,
      news
    }
  }

  handleArrowClick = (event) => {
    if(typeof document !== 'undefined' && document) {
      let pageRoot = document.querySelector('div#home')

      // get the main section element
      let el = event.target.closest('.full-page')

      // find out index number of the section div relative to the parent
      let i = 0;
      while( (el = el.previousSibling) != null) i++

      // we want to scroll to the next section so we will select it
      if(pageRoot.children[i + 1]) pageRoot.children[i + 1].scrollIntoView()
    }
  }

  render() {
    return (
      <div id='home' style={{ '--page-color': this.state.color }}>
        <div className='full-page bcg-page-color'>
          <div className='flex justifycontent-center aligncontent-center'>
            <h1 id='page-title' className='huge-text text-center white-text'
              data-aos='fade-up' data-aos-delay='0'>{this.state.title}</h1>
          </div>
          <div data-aos='fade-up' data-aos-delay='0' data-aos-offset='0'>
            <span className="arrow arrow-down bottom-center clickable" onClick={this.handleArrowClick}></span>
          </div>
        </div>

        <div id='who-why' className='full-page-minimum flex alignitems-center'>
          <div className='container flex'>
            <div> 
              <h1 id='title' className='text-page-color'>Nucabé</h1>
              <p className='grey fontsize-3'>Pessoa com muita vontade de experimentar coisas novas, 20 anos e a contar, rabeta.</p>
              <p className='grey fontsize-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan arcu a pulvinar mollis.
    Morbi a malesuada ipsum. Sed porttitor sagittis felis, at luctus metus ornare sit amet. Ut laoreet, arcu non
    vulputate dictum, elit nulla sodales ante, ac aliquet nulla nunc at dolor.</p>
              <div className='flex'>
                <span id='email'></span>
                <span id='instagram'></span>
                <span id='facebook'></span>
              </div>
            </div>
          </div>
        </div>

        <div id='historical-line' className='full-page-minimum flex alignitems-center'>
          <div className='container'>
            <div id='timeline'>
              
            </div>
            <div>
              <h1 id='title' class='white-text'>Historical line</h1>
              <h2>Pre-Academic</h2>
              <ul>
                <li>1998 Born in Terceira Island</li>
                <li>2016 Participation in MITO's art installation exhibition</li>
                <li>2016 Changed Course from Sculpture to Equipment Design</li>
                <li>2017 Sent 2 Medals for the New Ideas in Medallic Sculpture exhibition in Japan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='full-page-minimum flex alignitems-center'>
          <div className='container'>
            <h1 id='title'>News</h1>
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
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  news: PropTypes.array
}

export const IndexPage = ({data}) => {
  // get graphql data
  let { colors } = data.colorsQuery.frontmatter
  let page = data.pageQuery.frontmatter

  // if this color (index) exists use it,
  // otherwise, use the first color
  let pageColor = ''
  if (page.color && colors[page.color - 1]) pageColor = colors[page.color - 1].replace('\\', '')
  else pageColor = colors[0].replace('\\', '')

  return (
    <Layout primaryColor={pageColor}>
      <IndexPageTemplate
        color={pageColor}
        image={page.image}
        title={page.title}
        heading={page.heading}
        subheading={page.subheading}
        mainpitch={page.mainpitch}
        description={page.description}
        intro={page.intro}
        news={page.news}
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
      intro {
        blurbs {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        heading
        description
      }
      mainpitch {
        title
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
}
`
