import React from 'react'
import PropTypes from 'prop-types'
import { InteriorDesignPostTemplate } from '../../templates/interior-design-post'

const InteriorDesignPostPreview = ({ entry, widgetFor }) => (
  <InteriorDesignPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

InteriorDesignPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default InteriorDesignPostPreview
