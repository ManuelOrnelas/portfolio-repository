import CMS from 'netlify-cms'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import DrawingPostPreview from './preview-templates/DrawingPostPreview'
import GraphicsDesignPostPreview from './preview-templates/GraphicsDesignPostPreview'
import InteriorDesignPostPreview from './preview-templates/InteriorDesignPostPreview'
import ProductDesignPostPreview from './preview-templates/ProductDesignPostPreview'
import SculpturePostPreview from './preview-templates/SculpturePostPreview'
import WritingPostPreview from './preview-templates/WritingPostPreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('drawing', DrawingPostPreview)
CMS.registerPreviewTemplate('graphics-design', GraphicsDesignPostPreview)
CMS.registerPreviewTemplate('interior-design', InteriorDesignPostPreview)
CMS.registerPreviewTemplate('product-design', ProductDesignPostPreview)
CMS.registerPreviewTemplate('sculpture', SculpturePostPreview)
CMS.registerPreviewTemplate('writing', WritingPostPreview)
