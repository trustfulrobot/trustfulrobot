import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
    }
    bullhorn_phone: imageSharp(fluid: {originalName: {eq: "bullhorn_phone.jpg"}}) {
      fluid(maxWidth: 768, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    bullhorn_tablet: imageSharp(fluid: {originalName: {eq: "bullhorn_tablet.jpg"}}) {
      fluid(maxWidth: 992, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    bullhorn_desktop: imageSharp(fluid: {originalName: {eq: "bullhorn_desktop.jpg"}}) {
      fluid(maxWidth: 2000, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    castleandkey_phone: imageSharp(fluid: {originalName: {eq: "castleandkey_phone.jpg"}}) {
      fluid(maxWidth: 768, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    castleandkey_tablet: imageSharp(fluid: {originalName: {eq: "castleandkey_tablet.jpg"}}) {
      fluid(maxWidth: 992, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    castleandkey_desktop: imageSharp(fluid: {originalName: {eq: "castleandkey_desktop.jpg"}}) {
      fluid(maxWidth: 2000, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    granulata_phone: imageSharp(fluid: {originalName: {eq: "granulata_phone.jpg"}}) {
      fluid(maxWidth: 768, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    granulata_tablet: imageSharp(fluid: {originalName: {eq: "granulata_tablet.jpg"}}) {
      fluid(maxWidth: 992, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    granulata_desktop: imageSharp(fluid: {originalName: {eq: "granulata_desktop.jpg"}}) {
      fluid(maxWidth: 2000, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    lbx_phone: imageSharp(fluid: {originalName: {eq: "lbx_phone.jpg"}}) {
      fluid(maxWidth: 768, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    lbx_tablet: imageSharp(fluid: {originalName: {eq: "lbx_tablet.jpg"}}) {
      fluid(maxWidth: 992, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    lbx_desktop: imageSharp(fluid: {originalName: {eq: "lbx_desktop.jpg"}}) {
      fluid(maxWidth: 2000, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    patrickmorrissey_phone: imageSharp(fluid: {originalName: {eq: "patrickmorrissey_phone.jpg"}}) {
      fluid(maxWidth: 768, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    patrickmorrissey_tablet: imageSharp(fluid: {originalName: {eq: "patrickmorrissey_tablet.jpg"}}) {
      fluid(maxWidth: 992, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    patrickmorrissey_desktop: imageSharp(fluid: {originalName: {eq: "patrickmorrissey_desktop.jpg"}}) {
      fluid(maxWidth: 2000, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`



function HomePage({ data }) {
  const bullhorn_sources = [
    data.bullhorn_phone.fluid,
    {
      ...data.bullhorn_desktop.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...data.bullhorn_tablet.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  const castleandkey_sources = [
    data.castleandkey_phone.fluid,
    {
      ...data.castleandkey_desktop.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...data.castleandkey_tablet.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  const granulata_sources = [
    data.granulata_phone.fluid,
    {
      ...data.granulata_desktop.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...data.granulata_tablet.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  const lbx_sources = [
    data.lbx_phone.fluid,
    {
      ...data.lbx_desktop.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...data.lbx_tablet.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  const patrickmorrissey_sources = [
    data.patrickmorrissey_phone.fluid,
    {
      ...data.patrickmorrissey_desktop.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...data.patrickmorrissey_tablet.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  return (
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
            <p>I am a Senior Developer with a 20-year history of providing services across the full stack who has also, at times, served as a content author as well as a liaison with website clients. As such, I feel that I have a <em>deep sensitivity</em> to the entire spectrum of perspectives of those involved in the full life-cycle of a website.</p>

            <p>I seek to create web experiences that are not only elegant for users and content authors but also a delight with which to work for fellow developers, based on a rock-solid foundational knowledge of semantic HTML, CSS, and Javascript.</p>

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
          <li>
            <section>
              <Img fluid={castleandkey_sources} />
              <div className="workdetails__wrapper">
                <div className="workdetails">
                  <h4>Castle & Key Distillery</h4>
                  <p>Fully-custom <strong>Shopify</strong> development</p>
                  <div className="linkwrapper"><a href="https://castleandkey.com/" target="_blank" rel="noopener noreferrer">castleandkey.com</a></div>
                </div>
              </div>
            </section>
          </li>
          <li>
            <section>
              <Img fluid={lbx_sources} />
              <div className="workdetails__wrapper">
                <div className="workdetails">
                  <h4>Link-Belt Excavators</h4>
                  <p>Fully-custom <strong>WordPress</strong> development with personalized content builder</p>
                  <div className="linkwrapper"><a href="https://en.lbxco.com/" target="_blank" rel="noopener noreferrer">en.lbxco.com</a></div>
                </div>
              </div>
            </section>
          </li>
          <li>
            <section>
              <Img fluid={bullhorn_sources} />
              <div className="workdetails__wrapper">
                <div className="workdetails">
                  <h4>Bullhorn Creative</h4>
                  <p>Fully-custom <strong>WordPress</strong> development with personalized content builder</p>
                  <div className="linkwrapper"><a href="https://bullhorncreative.com/" target="_blank" rel="noopener noreferrer">bullhorncreative.com</a></div>
                </div>
              </div>
            </section>
          </li>
          <li>
            <section>
              <Img fluid={granulata_sources} />
              <div className="workdetails__wrapper">
                <div className="workdetails">
                  <h4>Granulata</h4>
                  <p>Website to accompany exhibit at <strong>The 2020 Music, Art, and Technology Fair</strong> at Georgia Tech</p>
                  <div className="linkwrapper"><a href="https://granulata.com/" target="_blank" rel="noopener noreferrer">granulata.com</a></div>
                </div>
              </div>
            </section>
          </li>
          <li>
            <section>
              <Img fluid={patrickmorrissey_sources} />
              <div className="workdetails__wrapper">
                <div className="workdetails">
                  <h4>Patrick Morrissey</h4>
                  <p>Personal website with rantings, ravings, and reality tests</p>
                  <div className="linkwrapper"><a href="http://patrickmorrissey.com/" target="_blank" rel="noopener noreferrer">patrickmorrissey.com</a></div>
                </div>
              </div>
            </section>
          </li>
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
}

export default HomePage