/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Trustful Robot | Digital Shamanism`,
    siteUrl: `https://trustfulrobot.com`,
    description: `Trustful Robot is here to help you navigate through your digital world.  From Front End Development to Audio Engineering to 3D Simulations and Renders, I know about a lot of things and am curious to see how I can apply my knowledge to your problem.`,
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
  {
	  resolve: `gatsby-plugin-favicon`,
  	options: {
  		logo: './src/favicon.png',
  		appName: 'Trustful Robot',
  		appDescription: 'Trustful Robot Webite',
  		display: 'browser',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
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
  }
  ]
}
