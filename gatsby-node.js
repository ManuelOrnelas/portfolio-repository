const path = require('path')

exports.createPages = ({graphql, actions}) => {

  const {createPage} = actions

  let drawingPages = new Promise((resolve, reject) => {
    const drawingItemTemplate = path.resolve('src/templates/drawing-item.js')
    resolve(
      graphql(`
        {
          allContentfulDrawingItems (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulDrawingItems.edges.forEach((edge) => {
          createPage({
            path: 'drawing/' + edge.node.slug,
            component: drawingItemTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })

  let graphicsDesignPages = new Promise((resolve, reject) => {
    const graphicsDesignItemTemplate = path.resolve('src/templates/graphics-design-item.js')
    resolve(
      graphql(`
        {
          allContentfulGraphicsDesignItems (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulGraphicsDesignItems.edges.forEach((edge) => {
          createPage({
            path: 'graphics-design/' + edge.node.slug,
            component: graphicsDesignItemTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })

  let interiorDesignPages = new Promise((resolve, reject) => {
    const interiorDesignItemTemplate = path.resolve('src/templates/interior-design-item.js')
    resolve(
      graphql(`
        {
          allContentfulInteriorDesignItems (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulInteriorDesignItems.edges.forEach((edge) => {
          createPage({
            path: 'interior-design/' + edge.node.slug,
            component: interiorDesignItemTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })

  let productDesignPages = new Promise((resolve, reject) => {
    const productDesignItemTemplate = path.resolve('src/templates/product-design-item.js')
    resolve(
      graphql(`
        {
          allContentfulProductDesignItems (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProductDesignItems.edges.forEach((edge) => {
          createPage({
            path: 'product-design/' + edge.node.slug,
            component: productDesignItemTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })

  let sculpturePages = new Promise((resolve, reject) => {
    const sculptureItemTemplate = path.resolve('src/templates/sculpture-item.js')
    resolve(
      graphql(`
        {
          allContentfulSculptureItems (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulSculptureItems.edges.forEach((edge) => {
          createPage({
            path: 'sculpture/' + edge.node.slug,
            component: sculptureItemTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })

  let writingPages = new Promise((resolve, reject) => {
    const writingItemTemplate = path.resolve('src/templates/writing-item.js')
    resolve(
      graphql(`
        {
          allContentfulWritingItems (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulWritingItems.edges.forEach((edge) => {
          createPage({
            path: 'writing/' + edge.node.slug,
            component: writingItemTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })

  return Promise.all([
    drawingPages, 
    graphicsDesignPages, 
    interiorDesignPages, 
    productDesignPages, 
    sculpturePages, 
    writingPages
  ])
}
