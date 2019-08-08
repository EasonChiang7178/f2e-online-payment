module.exports = {
  siteMetadata: {
    title: `九華山 香香農特產`,
    description: `在地化的農特產結合支付流程的UI設計。 | Designed by Suhan`,
    author: `@EasonChiang7178`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `items`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `九華山香香農特產`,
        short_name: `九華山農特產`,
        start_url: `/`,
        background_color: `#F0D0D5`,
        theme_color: `#D8586D`,
        display: `minimal-ui`,
        icon: `src/images/payment-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
