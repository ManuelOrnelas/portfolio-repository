import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar'

export default class IndexPage extends React.component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Sidebar />
        {/* Here come the divs */}
        <div className="full-page">
          <h1>Intro.</h1>
        </div>
        {/* Code below is not styled */}
        <div id="information" className="full-page">
          <h1>Nucabé</h1>
          <p>Pessoa com muita vontade de experimentar coisas novas, 20 anos e a contar, rabeta.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan arcu a pulvinar mollis. Morbi a malesuada ipsum. Sed porttitor sagittis felis, at luctus metus ornare sit amet. Ut laoreet, arcu non vulputate dictum, elit nulla sodales ante, ac aliquet nulla nunc at dolor.</p>
          <img>Hello</img>
        </div>
        <div id="historical-line" className="full-page">

        </div>
        <div id="news" className="full-page">

        </div>

      </Layout>
    )
  }
}
