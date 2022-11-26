exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query PageQuery {
        allGraphCmsArticle {
          edges {
            node {
              urlName
              category
            }
          }
        }
      }
      
    `)
    data.allGraphCmsArticle.edges.forEach(edge => {
      const slug = edge.node.urlName
      const category = edge.node.category
      actions.createPage({
        path: `${category.toLowerCase()}/${slug}`,
        component: require.resolve(`./src/templates/articleTemplate.js`),
        context: { slug: slug },
      })
    })
    var categories = [];
    data.allGraphCmsArticle.edges.forEach(edge => {
      categories.push(edge.node.category)
    })
    categories = [...new Set(categories)]
    categories.forEach(function(category){
      actions.createPage({
        path: category.toLowerCase(),
        component: require.resolve(`./src/templates/categoryPage.js`),
        context: {category: category},
      })
    })
  }