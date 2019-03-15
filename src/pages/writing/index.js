import React from 'react'

import Layout from '../../components/Layout'
import WritingRoll from '../../components/WritingRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
    <Layout>
      <div className='full-page-title yellow white-text'>
        <h1>Writing.</h1>
      </div>
      <WritingRoll />
    </Layout> 
    )
  }
}
