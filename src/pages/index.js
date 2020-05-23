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
      <html lang="en" />
    </Helmet>
    <main>
      <h1>{data.site.siteMetadata.title}</h1>
    </main>
  </div>
)