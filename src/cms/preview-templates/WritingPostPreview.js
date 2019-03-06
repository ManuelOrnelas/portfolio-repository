import React from 'react'
import PropTypes from 'prop-types'
import { WritingPostTemplate } from '../../templates/writing-post'

const WritingPostPreview = ({ entry, widgetFor }) => (
  <WritingPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

WritingPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WritingPostPreview
