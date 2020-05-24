import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../sass/trustfulrobot.scss"
import svg_logo from "../../static/images/TrustfulRobot_DigitalShamanism.svg"



export const SiteMetadata = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        twitter
        description
      }
    },
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
      <section className="tr_block tr_block__intro">
        <h1><img src={`${svg_logo}`} alt="Trustful Robot | Digital Shamanism" /></h1>
        <div id="introtext">
          <p>I am a Senior Developer with a history of serving in both front-end and back-end roles that has also, at times, served as a content author and liaison with website clients. As such, I feel that I have a <em>deep sensitivity</em> to the entire spectrum of perspectives of those involved in the full life-cycle of a website. I seek to create web experiences that are not only elegant for users and content authors but also a delight with which to work for fellow developers, based around a rock-solid foundational knowledge of semantic HTML, CSS, and Javascript.</p>

          <p>I am a <strong>voracious and insatiable learner</strong>, constantly searching for increasingly optimal paths and revolutionary insights.</p>
        </div>
      </section>

      <section className="tr_block tr_block__technology">
        <h2>Technology</h2>
        <div id="techstacks">
          <section>
            <h3>My current preferred tech stack:</h3>
            <ul>
              <li>Static site generation with <strong>GatsbyJS</strong> and <strong>GraphQL</strong></li>
              <li>Content management with <strong>Prismic</strong></li>
              <li>Hosting with <strong>Netlify</strong> & <strong>AWS</strong></li>
              <li><strong>Continuous Integration</strong> with <strong>GitHub</strong></li>
            </ul>
          </section>
          <section>
            <h3>My preferred <strong>WordPress</strong> tech stack:</h3>
            <ul>
              <li><strong>Underscores</strong> starter theme</li>
              <li><strong>WPGulp</strong> workflow based on <strong>npm</strong> and <strong>SASS</strong></li>
              <li><strong>Advanced Custom Fields Pro</strong></li>
            </ul>
          </section>
        </div>
      </section>
      <section className="tr_block tr_block__work">
        <h2>Work</h2>
        <div id="worklist">
        <ul>
        <li>Castle & Key Distillery</li>
        <li>Link-Belt Excavators</li>
        <li>Bullhorn Creative</li>
        <li>Granulata</li>
        <li>Patrick Morrissey</li>
        </ul>
        </div>
      </section>
      <section className="tr_block tr_block__instagram">
        <h2>Instagram</h2>
        <div id="instagramlist">
          <span>Instgram embed here</span>
        </div>
      </section>
      <section className="tr_block tr_block__contact">
        <h2>Contact</h2>
        <div id="linkanting">
          <section>
            <p><a href="mailto:patrick@trustfulrobot.com" target="_blank" rel="noopener noreferrer">
              patrick@trustfulrobot.com
            </a></p>
          </section>
          <section>
            <p><a href="https://www.linkedin.com/in/p-morrissey/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a></p>
          </section>
          <section>
            <p><a href="https://github.com/trustfulrobot" target="_blank" rel="noopener noreferrer">
              GitHub
            </a></p>
          </section>
        </div>
      </section>
    </main>
  </div>
)