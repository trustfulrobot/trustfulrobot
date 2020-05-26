/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Trustful Robot | Digital Shamanism`,
    siteUrl: `https://trustfulrobot.com`,
    description: `I am a Senior Developer with a 20-year history of providing services across the full stack who has also, at times, served as a content author as well as a liaison with website clients. As such, I feel that I have a deep sensitivity to the entire spectrum of perspectives of those involved in the complete life-cycle of a website.`,
    twitter: `@frightlab`
  },
  plugins: [
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-158785070-1",
    }
  },
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: `./src/favicon.png`,
      appName: `Trustful Robot`,
      appDescription: `Trustful Robot | Digital Shamanism`,
      display: `browser`,
      lang: `en-US`,
      background: `#F2F4F3`,
      theme_color: `#000807`,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        yandex: false,
        windows: false
      }
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/static/images/`,
    },
  },
  {
    resolve: `gatsby-source-instagram`,
    options: {
      username: `frightlab`,
    },
  }
  ]
}
