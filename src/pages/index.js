import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import imageSource from "../images/nucabe-men.png"

export default class IndexPage extends Component {
  render() {
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
            <h1>Nucabé.</h1>
            <p>
              Pessoa com muita vontade de experimentar coisas novas, 20 anos e a
              contar, rabeta.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              accumsan arcu a pulvinar mollis. Morbi a malesuada ipsum. Sed
              porttitor sagittis felis, at luctus metus ornare sit amet. Ut
              laoreet, arcu non vulputate dictum, elit nulla sodales ante, ac
              aliquet nulla nunc at dolor.
            </p>
            <img src={imageSource} alt="Logo" />
        </div>
        <div id="historical-line" className="historical-line bg-yellow">
          <h1>Helloworld</h1>
        </div>
        <div id="news" className="news">
          <div className="news-item">
            <p>December 11, 2018</p>
            <h1>Sent 2 dicks to Mateus</h1>
            <p>
              Avenir Light is a clean and stylish font favored by designers.
              It’s easy on the eyes and a great go to font for titles,
              paragraphs & more.
            </p>
          </div>
          <div className="news-item">
            <p>December 11, 2018</p>
            <h1>Sent 2 dicks to Mateus</h1>
            <p>
              Avenir Light is a clean and stylish font favored by designers.
              It’s easy on the eyes and a great go to font for titles,
              paragraphs & more.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}
