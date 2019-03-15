import React from 'react'

import Layout from '../../components/Layout'
import ProductDesignRoll from '../../components/ProductDesignRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
      <div className='full-page-title yellow white-text'>
        <h1>Product Design.</h1>
      </div>
        <ProductDesignRoll />
      </Layout>
    )
  }
}
