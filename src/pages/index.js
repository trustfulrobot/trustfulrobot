import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { format } from "date-fns"
import { Fade } from "react-awesome-reveal"
import "../sass/trustfulrobot.scss"
import svg_logo from "../../static/images/TrustfulRobot_DigitalShamanism.svg"
import social_graph_img from "../../static/images/socialgraphimg.jpg"



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
    sitebgimg: imageSharp(fluid: {originalName: {eq: "site_background_img.jpg"}}) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    virginiaspirits_phone: imageSharp(fluid: {originalName: {eq: "virginiaspirits_phone.jpg"}}) {
      fluid(maxWidth: 320, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    virginiaspirits_tablet: imageSharp(fluid: {originalName: {eq: "virginiaspirits_tablet.jpg"}}) {
      fluid(maxWidth: 440, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    virginiaspirits_desktop: imageSharp(fluid: {originalName: {eq: "virginiaspirits_desktop.jpg"}}) {
      fluid(maxWidth: 720, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    bullhorn_phone: imageSharp(fluid: {originalName: {eq: "bullhorn_phone.jpg"}}) {
      fluid(maxWidth: 320, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    bullhorn_tablet: imageSharp(fluid: {originalName: {eq: "bullhorn_tablet.jpg"}}) {
      fluid(maxWidth: 440, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    bullhorn_desktop: imageSharp(fluid: {originalName: {eq: "bullhorn_desktop.jpg"}}) {
      fluid(maxWidth: 720, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    castleandkey_phone: imageSharp(fluid: {originalName: {eq: "castleandkey_phone.jpg"}}) {
      fluid(maxWidth: 320, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    castleandkey_tablet: imageSharp(fluid: {originalName: {eq: "castleandkey_tablet.jpg"}}) {
      fluid(maxWidth: 440, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    castleandkey_desktop: imageSharp(fluid: {originalName: {eq: "castleandkey_desktop.jpg"}}) {
      fluid(maxWidth: 720, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    norihall_phone: imageSharp(fluid: {originalName: {eq: "norihall_phone.jpg"}}) {
      fluid(maxWidth: 320, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    norihall_tablet: imageSharp(fluid: {originalName: {eq: "norihall_tablet.jpg"}}) {
      fluid(maxWidth: 440, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    norihall_desktop: imageSharp(fluid: {originalName: {eq: "norihall_desktop.jpg"}}) {
      fluid(maxWidth: 720, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    thriveglobalpartners_phone: imageSharp(fluid: {originalName: {eq: "thriveglobalpartners_phone.jpg"}}) {
      fluid(maxWidth: 320, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    thriveglobalpartners_tablet: imageSharp(fluid: {originalName: {eq: "thriveglobalpartners_tablet.jpg"}}) {
      fluid(maxWidth: 440, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    thriveglobalpartners_desktop: imageSharp(fluid: {originalName: {eq: "thriveglobalpartners_desktop.jpg"}}) {
      fluid(maxWidth: 720, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    granulata_phone: imageSharp(fluid: {originalName: {eq: "granulata_phone.jpg"}}) {
      fluid(maxWidth: 320, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    granulata_tablet: imageSharp(fluid: {originalName: {eq: "granulata_tablet.jpg"}}) {
      fluid(maxWidth: 440, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    granulata_desktop: imageSharp(fluid: {originalName: {eq: "granulata_desktop.jpg"}}) {
      fluid(maxWidth: 720, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    lbx_phone: imageSharp(fluid: {originalName: {eq: "lbx_phone.jpg"}}) {
      fluid(maxWidth: 320, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    lbx_tablet: imageSharp(fluid: {originalName: {eq: "lbx_tablet.jpg"}}) {
      fluid(maxWidth: 440, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    lbx_desktop: imageSharp(fluid: {originalName: {eq: "lbx_desktop.jpg"}}) {
      fluid(maxWidth: 720, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    patrickmorrissey_phone: imageSharp(fluid: {originalName: {eq: "patrickmorrissey_phone.jpg"}}) {
      fluid(maxWidth: 320, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    patrickmorrissey_tablet: imageSharp(fluid: {originalName: {eq: "patrickmorrissey_tablet.jpg"}}) {
      fluid(maxWidth: 440, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    patrickmorrissey_desktop: imageSharp(fluid: {originalName: {eq: "patrickmorrissey_desktop.jpg"}}) {
      fluid(maxWidth: 720, duotone: { highlight: "#F2F4F3", shadow: "#000807" }) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    allInstagram: allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 12) {
      instagram_post: nodes {
        id
        caption
        original
        timestamp
        localFile {
          childImageSharp {
            fluid(maxWidth: 440, duotone: { highlight: "#DADCDB", shadow: "#536273" }){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const socialGraphImg = "https://trustfulrobot.com" + social_graph_img;



function HomePage({ data }) {
  const virginiaspirits_sources = [
    data.virginiaspirits_phone.fluid,
    {
      ...data.virginiaspirits_desktop.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...data.virginiaspirits_tablet.fluid,
      media: `(min-width: 768px)`,
    },
  ];
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
  const norihall_sources = [
    data.norihall_phone.fluid,
    {
      ...data.norihall_desktop.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...data.norihall_tablet.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  const thriveglobalpartners_sources = [
    data.thriveglobalpartners_phone.fluid,
    {
      ...data.thriveglobalpartners_desktop.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...data.thriveglobalpartners_tablet.fluid,
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

  const allInstagramDOM = data.allInstagram.instagram_post.map(function(instagram_post, index){
    const ig_post__timestamp = instagram_post.timestamp;
    const igImage = instagram_post.localFile.childImageSharp.fluid;
    const postDate = new Date(ig_post__timestamp * 1000);
    const formattedDate = format(postDate, 'dd. MMMM yyy');
    const igPostURL = "https://instagram.com/p/" + instagram_post.id;
    return (
      <li key={index}>
        <a href={igPostURL} target="_blank" rel="noopener noreferrer">
          <Img 
            fluid={igImage}
            alt={formattedDate}
          />
        </a>
        <div className="ig-post-date">{formattedDate}</div>
      </li>
    )
  })

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
        <meta property="og:image" content={`${socialGraphImg}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://twitter.com/frightlab" />
        <html lang="en" />
      </Helmet>
      <div id="bgimg">
        <Img 
          fluid={data.sitebgimg.fluid}
          alt="Trustful Robot Business Card Presentation"
        />
      </div>
      <main>
        <section className="tr_block tr_block__intro">
          <Fade triggerOnce duration={1500} >
            <h1><img src={`${svg_logo}`} alt="Trustful Robot | Digital Shamanism" /></h1>
          </Fade>
          <Fade duration={3000} triggerOnce >
            <div id="introtext">
              <p>I am a Senior Developer with a 20-year history of providing services across the full stack who has also at times served as a content author as well as a liaison with website clients. As such, I feel that I have a <em>deep sensitivity</em> to the entire spectrum of perspectives of those involved in the complete life-cycle of a website.</p>

              <p>I seek to create web experiences that are not only elegant for users and content authors but also a delight with which to work for fellow developers, based on a rock-solid foundational knowledge of semantic HTML, CSS, and Javascript.</p>

              <p>I am a <strong>voracious and insatiable learner</strong>, constantly searching for increasingly optimal paths and revolutionary insights.</p>
            </div>
          </Fade>
        </section>

        <section className="tr_block tr_block__technology">
          <Fade duration={3000} triggerOnce >
            <h2>Technology</h2>
            <div id="techstacks">
              <Fade duration={1500} delay={500} triggerOnce cascade damping={0.25} >
                <section>
                  <h3>My preferred <strong>WordPress</strong> tech stack:</h3>
                  <ul>
                    <li><strong>Underscores</strong> starter theme</li>
                    <li><strong>WPGulp</strong> workflow based on <strong>npm</strong> and <strong>SASS</strong></li>
                    <li><strong>Advanced Custom Fields Pro</strong></li>
                  </ul>
                </section>
                <section>
                  <h3>My "cutting-edge" tech stack:</h3>
                  <ul>
                    <li>Static site generation with <strong>GatsbyJS</strong> and <strong>GraphQL</strong></li>
                    <li>Content management with <strong>Prismic</strong></li>
                    <li>Hosting with <strong>Netlify</strong> & <strong>AWS</strong></li>
                    <li><strong>Continuous Integration, Deployment, and Delivery</strong> with <strong>GitHub</strong></li>
                  </ul>
                </section>
              </Fade>
            </div>
          </Fade>
        </section>
        <section className="tr_block tr_block__work">
          <Fade duration={3000}>
            <h2>Work</h2>
          </Fade>
          <div id="worklist">
          <ul>
            <Fade triggerOnce duration={3000}>
              <li>
                <section>
                  <div className="workimage__wrapper">
                    <a href="https://virginiaspirits.org/" target="_blank" rel="noopener noreferrer">
                      <Img 
                        fluid={virginiaspirits_sources} 
                        alt="Virginia Spirits Association Website"
                      />
                    </a>
                  </div>
                  <div className="workdetails__wrapper">
                    <div className="workdetails">
                      <h4>Virginia Spirits Association</h4>
                      <p>Fully-custom <strong>WordPress</strong> and <strong>Google Maps</strong> development</p>
                      <div className="linkwrapper"><a href="https://virginiaspirits.org/" target="_blank" rel="noopener noreferrer">virginiaspirits.org</a></div>
                    </div>
                  </div>
                </section>
              </li>
            </Fade>
            <Fade triggerOnce duration={3000}>
              <li>
                <section>
                  <div className="workimage__wrapper">
                    <a href="https://castleandkey.com/" target="_blank" rel="noopener noreferrer">
                      <Img 
                        fluid={castleandkey_sources} 
                        alt="Castle & Key Distillery Website"
                      />
                    </a>
                  </div>
                  <div className="workdetails__wrapper">
                    <div className="workdetails">
                      <h4>Castle & Key Distillery</h4>
                      <p>Fully-custom <strong>Shopify</strong> development</p>
                      <div className="linkwrapper"><a href="https://castleandkey.com/" target="_blank" rel="noopener noreferrer">castleandkey.com</a></div>
                    </div>
                  </div>
                </section>
              </li>
            </Fade>
            <Fade triggerOnce duration={3000}>
              <li>
                <section>
                  <div className="workimage__wrapper">
                    <a href="https://en.lbxco.com/" target="_blank" rel="noopener noreferrer">
                      <Img 
                        fluid={lbx_sources}
                        alt="Link-Belt Excavators Website" 
                      />
                    </a>
                  </div>
                  <div className="workdetails__wrapper">
                    <div className="workdetails">
                      <h4>Link-Belt Excavators</h4>
                      <p>Fully-custom <strong>WordPress</strong> development with personalized content builder</p>
                      <div className="linkwrapper"><a href="https://en.lbxco.com/" target="_blank" rel="noopener noreferrer">en.lbxco.com</a></div>
                    </div>
                  </div>
                </section>
              </li>
            </Fade>
            <Fade triggerOnce duration={3000}>
              <li>
                  <section>
                    <div className="workimage__wrapper">
                      <a href="https://bullhorncreative.com/" target="_blank" rel="noopener noreferrer">
                        <Img 
                          fluid={bullhorn_sources}
                          alt="Bullhorn Creative Website" 
                        />
                      </a>
                    </div>
                    <div className="workdetails__wrapper">
                      <div className="workdetails">
                        <h4>Bullhorn Creative</h4>
                        <p>Fully-custom <strong>WordPress</strong> development with personalized content builder</p>
                        <div className="linkwrapper"><a href="https://bullhorncreative.com/" target="_blank" rel="noopener noreferrer">bullhorncreative.com</a></div>
                      </div>
                    </div>
                  </section>
              </li>
            </Fade>
            <Fade triggerOnce duration={3000}>
              <li>
                <section>
                  <div className="workimage__wrapper">
                    <a href="http://thriveglobalpartners.org/" target="_blank" rel="noopener noreferrer">
                      <Img 
                        fluid={thriveglobalpartners_sources} 
                        alt="Thrive Global Partners Website"
                      />
                    </a>
                  </div>
                  <div className="workdetails__wrapper">
                    <div className="workdetails">
                      <h4>Thrive Global Partners</h4>
                      <p><strong>Gatsby</strong> and <strong>React</strong> development with content management in <strong>Prismic</strong></p>
                      <div className="linkwrapper"><a href="http://thriveglobalpartners.org/" target="_blank" rel="noopener noreferrer">thriveglobalpartners.org</a></div>
                    </div>
                  </div>
                </section>
              </li>
            </Fade>
            <Fade triggerOnce duration={3000}>
              <li>
                <section>
                  <div className="workimage__wrapper">
                    <a href="https://norihall.com/" target="_blank" rel="noopener noreferrer">
                      <Img 
                        fluid={norihall_sources} 
                        alt="Nori Hall Photography Portfolio Website"
                      />
                    </a>
                  </div>
                  <div className="workdetails__wrapper">
                    <div className="workdetails">
                      <h4>Nori Hall Photography</h4>
                      <p><strong>Gatsby</strong> and <strong>React</strong> development with content management in <strong>Prismic</strong></p>
                      <div className="linkwrapper"><a href="https://norihall.com/" target="_blank" rel="noopener noreferrer">norihall.com</a></div>
                    </div>
                  </div>
                </section>
              </li>
            </Fade>
            <Fade triggerOnce duration={3000}>
              <li>
                  <section>
                    <div className="workimage__wrapper">
                      <a href="https://granulata.com/" target="_blank" rel="noopener noreferrer">
                        <Img 
                          fluid={granulata_sources}
                          alt="Granulata Website" 
                        />
                      </a>
                    </div>
                    <div className="workdetails__wrapper">
                      <div className="workdetails">
                        <h4>Granulata</h4>
                        <p>Website to accompany exhibit at <strong>The 2020 Music, Art, and Technology Fair</strong> at Georgia Tech</p>
                        <div className="linkwrapper"><a href="https://granulata.com/" target="_blank" rel="noopener noreferrer">granulata.com</a></div>
                      </div>
                    </div>
                  </section>
              </li>
            </Fade>
            <Fade triggerOnce duration={3000}>
              <li>
                  <section>
                    <div className="workimage__wrapper">
                      <a href="http://patrickmorrissey.com/" target="_blank" rel="noopener noreferrer">
                        <Img 
                          fluid={patrickmorrissey_sources}
                          alt="Patrick Morrissey Website" 
                        />
                      </a>
                    </div>
                    <div className="workdetails__wrapper">
                      <div className="workdetails">
                        <h4>Patrick Morrissey</h4>
                        <p>Semantic Self-Portrait</p>
                        <div className="linkwrapper"><a href="http://patrickmorrissey.com/" target="_blank" rel="noopener noreferrer">patrickmorrissey.com</a></div>
                      </div>
                    </div>
                  </section>
              </li>
            </Fade>
            </ul>
          </div>
        </section>
        <section className="tr_block tr_block__instagram">
          <Fade duration={3000} triggerOnce >
            <h2>Instagram</h2>
          </Fade>
          <div id="instagramlist">
            <Fade triggerOnce duration={3000} >
              <ul>
                {allInstagramDOM}
              </ul>
            </Fade>
            <p className="ig-account-link">See all: <a href="https://www.instagram.com/frightlab/" target="_blank" rel="noopener noreferrer">instagram.com/frightlab</a></p>
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

        <section id="originstory" className="tr_block tr_block__origin">
          <Fade duration={3000} triggerOnce >
            <h2>Origin Story</h2>

            <div>
              <h3>So what exactly does <strong>Trustful Robot</strong> mean and from where did the name come?</h3>

              <p>For the meaning, I will smile wryly and leave you to decide for yourself what it could mean but, as for the name's conception, it emerged from an agency talk that I was leading on computational creativity.  I spoke of what actually constitutes "creativity" from a computer or scientist's perspective and provided examples of specific methods and procedures that allow one to collaborate with Chance.  As a final group exercise, we all created our own fold-in prose experiments (instructions below) in order to generate a new WiFi password for the office.  "Trustful Robot" was the phrase that we collectively manifested and I began to really like it as an abstract idea.</p>

              <h4>You can view the slides that accompanied my talk in this PDF:</h4>
              <p><a href="/the_unseen_collaborator.pdf">the_unseen_collaborator.pdf</a></p>

              <h4>Instructions for generating your own cut-up/fold-in experiments:</h4>
              <ol>
                <li>Choose 2-3 text sources (anything written - novels, technical manuals, journal entries, news articles, advertisements, total gibberish, etc).  I enjoy trying to make these as wildly different from one another as possible but you're the mastermind here - play by your own rules.</li>
                <li>Take a single piece of paper and fold it into as many equal columns as you have text sources.  Lined paper will help but isn't required.</li>
                <li>Find sections from each text source that you would like to "sample" and then, one source per page column, begin transcribing each source passage onto your folded paper by hand.  The more source text you have for each column, the more raw material you are adding in to the machine to be processed.</li>
                <li>Unfold your paper after you have finished transcribing your single source texts and then read across the page as you would normally.  You will <em>mostly</em> get a bunch of garbage, garbled nonsense out but, if you're willing to sift through the results, I've found that I almost always generate <em>something</em> interesting and curious and new with this process.  Be open-minded to delight and wonder.</li>
              </ol>
            </div>
          </Fade>
        </section>

      </main>
    </div>
  )
}

export default HomePage