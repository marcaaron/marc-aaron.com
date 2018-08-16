module.exports = {
  siteMetadata: {
    title: 'Marc Aaron Glasser',
  },
  plugins: [
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-euwest.graphcms.com/v1/cjktvig1j06ua01aqmi3zb5w1/master`,
        query: `
          {
            projects {
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
            }
            posts {
              id
              title
              url
              source
              img{
                url
              }
              createdAt
            }
          }`,
      },
    }
  ]
}
