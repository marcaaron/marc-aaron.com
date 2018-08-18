require('dotenv').config();
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
        endpoint: process.env.ENDPOINT,
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
              deployUrl
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
