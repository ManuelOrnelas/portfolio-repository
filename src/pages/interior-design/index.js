import React from 'react'

import Layout from '../../components/Layout'
import InteriorDesignRoll from '../../components/InteriorDesignRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
      <div className='full-page flex-center yellow white-text'>
        <h1 className='huge-text'>Interior Design.</h1>
      </div>
      <div className='full-page'>
        <div className='lateral-space'>
          <h1 className='projects'>Projects.</h1>
          <InteriorDesignRoll />
        </div>
      </div>
      </Layout>
    )
  }
}
