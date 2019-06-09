import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import imageSource from "../images/nucabe-men.png"

import facebook from  '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import email from '../images/email.svg'

export default class IndexPage extends Component {
  render() {
    const indexPageData = this.props.data.allContentfulIndexPage.edges[0].node
    const emailLink = 'mailto:hello@nucabe.com'
    const facebookLink = 'https://facebook.com/nucabe'
    const instagramLink = 'https://instagram.com/nucabe'
    return (
      <Layout>
        <SEO title="Home" />
        <Sidebar />
        {/* Here come the divs */}
        <div className="portfolio-jumbotron bg-yellow">
          <h1>Intro.</h1>
        </div>
        {/* Code below is not styled */}
        <div id="information" className="manuel-info">
          <div className="information">
            <h1>Nucabé.</h1>
            <p>{indexPageData.subtitle}</p>
            <p>{indexPageData.bio.bio}</p>
          </div>
          <img src={imageSource} alt="Logo" />
        </div>
        <div id="historical-line" className="historical-line bg-yellow">
          <h1>Historical Line</h1>
          {indexPageData.historicalLine.map((item) => {
            return (
              <p>{item.date} - {item.text}</p>
            )
          })}
        </div>
        <div id="news" className="news">
          <h1>News.</h1>
          <div className="news-item">
            <img src={indexPageData.firstNews.itemThumbnail.fluid.src} />
            <div className="container">
              <p>{indexPageData.firstNews.updatedAt}</p>
              <h1>{indexPageData.firstNews.title}</h1>
              <p>
                {indexPageData.firstNews.description}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulIndexPage {
      edges {
        node {
          subtitle
          bio {
            bio
          }
          historicalLine {
            text
            date
          }
          firstNews {
            itemThumbnail {
              fluid {
                src
              }
            }
            title
            description
            updatedAt
          }
          secondNews {
            itemThumbnail {
              fluid {
                src
              }
            }
            title
            description
            updatedAt
          }
        }
      }
    }
  }
`
