import React from 'react'

import Layout from '../../components/Layout'
import DrawingRoll from '../../components/DrawingRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
      <div className='full-page flex-center yellow white-text'>
        <h1 className='huge-text'>Drawing.</h1>
        </div>
      <div className='full-page'>
        <div className='lateral-space'>
        <h1 className='projects'>Projects.</h1>
          <DrawingRoll />
        </div>
      </div>
      </Layout>
    )
  }
}
