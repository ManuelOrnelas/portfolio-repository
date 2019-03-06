import React from 'react'
import PropTypes from 'prop-types'
import { DrawingPostTemplate } from '../../templates/drawing-post'

const DrawingPostPreview = ({ entry, widgetFor }) => (
  <DrawingPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

DrawingPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DrawingPostPreview
