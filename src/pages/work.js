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
          introduction {
            id
            title
            paragraph
          }
          projects {
            hoverImage {
              id
              title
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            featuredImage {
              title
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            slideDescription {
              buttonText
              link
              subtitle
              title
              icon {
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
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
          <SEO title="work" />
          <WorkPage workPageData={workPageData} />
          <Footer/>
        </React.Fragment>
      )
    }}
  />
)

export default Work
