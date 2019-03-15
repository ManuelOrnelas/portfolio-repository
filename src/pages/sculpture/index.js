import React from 'react'

import Layout from '../../components/Layout'
import SculptureRoll from '../../components/SculptureRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
      <div className='full-page-title yellow white-text'>
        <h1>Sculpture.</h1>
      </div>
        <SculptureRoll />
      </Layout>
    )
  }
}
