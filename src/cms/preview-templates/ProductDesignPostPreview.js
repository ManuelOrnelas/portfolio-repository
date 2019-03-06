import React from 'react'
import PropTypes from 'prop-types'
import { ProductDesignPostTemplate } from '../../templates/product-design-post'

const ProductDesignPostPreview = ({ entry, widgetFor }) => (
  <ProductDesignPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ProductDesignPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductDesignPostPreview
