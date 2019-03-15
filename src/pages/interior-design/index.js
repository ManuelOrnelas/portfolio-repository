import React from 'react'

import Layout from '../../components/Layout'
import InteriorDesignRoll from '../../components/InteriorDesignRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
      <div className='full-page-title yellow white-text'>
        <h1>Interior Design.</h1>
      </div>
        <InteriorDesignRoll />
      </Layout>
    )
  }
}
