import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import WorkPage from "../components/work-page"
import Footer from "../components/footer"
import Header from "../components/header"

const Work = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1WorkPage {
          name
          introduction {
            paragraph
            title
          }
          projects {
            featuredImage {
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
              file {
                url
              }
              title
            }
            hoverImage {
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
              file {
                url
              }
              title
            }
            slideDescription {
              buttonText
              icon {
                file {
                  url
                }
                title
              }
              link
              paragraph
              subtitle
              title
            }
          }
        }
      }
    `}
    render={data => {
      const workPageData = data.contentfulV1WorkPage
      return (
        <React.Fragment>
          <Header></Header>
          <SEO title="Work" />
          <WorkPage workPageData={workPageData} />
          <Footer />
        </React.Fragment>
      )
    }}
  />
)

export default Work