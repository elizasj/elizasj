module.exports = {
  siteMetadata: {
    title: `eliza sj`
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    }
  ]
};
