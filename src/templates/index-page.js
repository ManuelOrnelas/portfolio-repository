import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'

export class IndexPageTemplate extends React.Component {
  constructor(props) {
    super(props)

    // fetch all data from the props
    let { color, image,title, heading, subheading, mainpitch, description, intro, main } = this.props

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
      main
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

        <div className='full-page-minimum'>
          <div className='container'>
            <h1 id='title' className='text-page-color'>Nucabé</h1>
            <p className='grey'>Pessoa com muita vontade de experimentar coisas novas, 20 anos e a contar, rabeta.</p>
            <p className='grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan arcu a pulvinar mollis.
  Morbi a malesuada ipsum. Sed porttitor sagittis felis, at luctus metus ornare sit amet. Ut laoreet, arcu non
  vulputate dictum, elit nulla sodales ante, ac aliquet nulla nunc at dolor.</p>
            <div className='flex'>
              <span id='email'></span>
              <span id='instagram'></span>
              <span id='facebook'></span>
            </div>
          </div>
        </div>

        <div className='full-page-minimum'>
          <div className='container'>
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

        <div className='full-page-minimum'>
          <div className='container'>
            <h1>News</h1>
            <div>
              <img alt='Thumbnail' src="/img/thumbnail.jpg" />
              <h1>Sent 2 dicks to Mateus</h1>
              <p>This is a small description of what happened</p>
            </div>

            <div>
              <img alt='Thumbnail' src="/img/thumbnail.jpg" />
              <h1>Sent 2 dicks to Mateus</h1>
              <p>This is a small description of what happened</p>
            </div>

            <div>
              <img alt='Thumbnail' src="/img/thumbnail.jpg" />
              <h1>Sent 2 dicks to Mateus</h1>
              <p>This is a small description of what happened</p>
            </div>
          </div>

          {/*
          <div>
            <div
              className="full-width-image margin-top-0"
              style={{
                backgroundImage: `url(${
                  !!this.state.image.childImageSharp
                    ? this.state.image.childImageSharp.fluid.src
                    : this.state.image
                  })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`,
              }}
            >
              <div style={{
                display: 'flex',
                height: '150px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                flexDirection: 'column'
              }}>
                <h1
                  className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                  style={{
                    boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                    backgroundColor: 'rgb(255, 68, 0)',
                    color: 'white',
                    lineHeight: '1',
                    padding: '0.25em'
                  }}
                >
                  {this.state.title}
                </h1>
                <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                  style={{
                    boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                    backgroundColor: 'rgb(255, 68, 0)',
                    color: 'white',
                    lineHeight: '1',
                    padding: '0.25em'
                  }}
                >
                  {this.state.subheading}
                </h3>
              </div>
            </div>
            <section className="section section--gradient">
              <div className="container">
                <div className="section">
                  <div className="columns">
                    <div className="column is-10 is-offset-1">
                      <div className="content">
                        <div className="content">
                          <div className="tile">
                            <h1 className="title">{this.state.mainpitch.title}</h1>
                          </div>
                          <div className="tile">
                            <h3 className="subtitle">{this.state.mainpitch.description}</h3>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-12">
                            <h3 className="has-text-weight-semibold is-size-2">
                              {this.state.heading}
                            </h3>
                            <p>{this.state.description}</p>
                          </div>
                        </div>
                        <Features gridItems={this.state.intro.blurbs} />
                        <div className="columns">
                          <div className="column is-12 has-text-centered">
                            <Link className="btn" to="/products">
                              See all products
                  </Link>
                          </div>
                        </div>
                        <div className="column is-12">
                          <h3 className="has-text-weight-semibold is-size-2">
                            Latest stories
                    </h3>
                          <div className="column is-12 has-text-centered">
                            <Link className="btn" to="/blog">
                              Read more
                    </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>*/}
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
      mainpitch {
        title
        description
      }
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
    }
  }

  colorsQuery: markdownRemark(frontmatter: { fileID: { eq: "colors" } }) {
    frontmatter {
      colors
    }
  }
}
`
