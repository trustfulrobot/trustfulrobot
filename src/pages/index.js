import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../sass/variables.scss"
import "../sass/colors.scss"
import "../sass/fonts.scss"
import "../sass/elements.scss"
import "../sass/trustfulrobot.scss"


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
      <h1>Trustful Robot</h1>
      <p>I am a Senior Developer with a history of serving in both front-end and back-end roles that has also, at times, served as a content author and liaison with website clients. As such, I feel that I have a deep sensitivity to the full spectrum of perspectives of those involved in the full life-cycle of a website. I seek to create web experiences that are not only elegant as a user or content author but are a delight to work with as a fellow developer, based around a rock-solid foundational knowledge of semantic HTML, CSS, and Javascript.</p>

      <p>I am a voracious and insatiable learner, constantly searching for increasingly optimal paths and revolutionary insights.</p>

      <h2>Technology</h2>
      <h3>My current preferred tech stack:</h3>
      <ul>
        <li>Static site generation with GatsbyJS and GraphQL</li>
        <li>Content management with Prismic</li>
        <li>Hosting with Netlify & AWS</li>
        <li>Continuous Integration with GitHub</li>
      </ul>

      <h3>My preferred WordPress tech stack:</h3>
      <ul>
        <li>Underscores starter theme</li>
        <li>WPGulp workflow based on npm and Sass</li>
        <li>Advanced Custom Fields Pro</li>
      </ul>
    </main>
  </div>
)