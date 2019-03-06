import React from 'react'
import PropTypes from 'prop-types'
import { SculpturePostTemplate } from '../../templates/sculpture-post'

const SculpturePostPreview = ({ entry, widgetFor }) => (
  <SculpturePostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

SculpturePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SculpturePostPreview
