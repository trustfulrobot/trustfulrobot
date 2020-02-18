import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../sass/styles.scss"


export const SiteMetadata = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        twitter
        description
      }
    }
  }
`

export default ({ data }) => (
  <div className="container">
    <Helmet defer={false} defaultTitle={data.site.siteMetadata.title} titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}`} />
      <meta name="description" content={`${data.site.siteMetadata.description}`} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={data.site.siteMetadata.twitter} />
    </Helmet>
    <main>
      <img className="background" src="https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background.jpg" alt="Soon Come - Background - Room" srcSet="https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-480x640.jpg 480w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-768x1024.jpg 768w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-960x1280.jpg 960w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-1280x1707.jpg 1280w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-1536x2048.jpg 1536w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-1920x2560.jpg 1920w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background.jpg 2560w" />
      <div className="sooncome"><span>SOON COME</span></div>
      <img className="foreground" src="https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground.png" alt="Soon Come - Foreground - Room" srcSet="https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-480x640.png 480w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-768x1024.png 768w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-960x1280.png 960w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-1280x1707.png 1280w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-1536x2048.png 1536w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-1920x2560.png 1920w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground.png 2560w" />
    </main>
  </div>
)