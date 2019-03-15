import React from 'react'

import Layout from '../../components/Layout'
import DrawingRoll from '../../components/DrawingRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <div className='full-page-title yellow white-text'>
          <h1>Drawing.</h1>
        </div>
        <DrawingRoll />
      </Layout>
    )
  }
}
