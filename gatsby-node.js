exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
    query {
      cms {
        articles {
          urlName
          category
        }
      }
    }
    `)
    console.log("data: ", JSON.stringify(data,null,4))
    data.cms.articles.forEach(article => {
      const slug = article.urlName
      const category = article.category
      actions.createPage({
        path: `${category.toLowerCase()}/${slug}`,
        component: require.resolve(`./src/templates/articleTemplate.js`),
        context: { slug: slug },
      })
    })
    var categories = [];
    data.cms.articles.forEach(article => {
      categories.push(article.category)
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