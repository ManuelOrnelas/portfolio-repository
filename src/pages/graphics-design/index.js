import React from 'react'

import Layout from '../../components/Layout'
import GraphicsDesignRoll from '../../components/GraphicsDesignRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
      <div className='full-page-title yellow white-text'>
        <h1>Graphics Design.</h1>
      </div>
        <GraphicsDesignRoll />
      </Layout>
    )
  }
}
