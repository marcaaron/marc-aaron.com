const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProject{
          edges{
            node {
              id
              name
              title
              url
              description
              tools
              slug
              img{
                url
              }
              imgMock{
                url
              }
              deployUrl
            }
          }
        }
      }
    `
).then(result => {
      result.data.allProject.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/project.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
};
