import React from 'react'
import PropTypes from 'prop-types'
import { DrawingPostTemplate } from '../../templates/drawing-post'

const DrawingPostPreview = ({ entry, widgetFor }) => (
  <DrawingPostTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    details={entry.getIn(['data', 'details'])}
    image={entry.getIn(['data', 'image'])}
  />
)

DrawingPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DrawingPostPreview
