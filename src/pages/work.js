import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import WorkPage from "../components/work-page"
import HeaderNavigation from "../components/header-navigation"
import FooterWork from "../components/footer-work"

const Work = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1WorkPage {
          browserPageTitle
          keywords
          metaData
          rightArrow {
            file {
              url
            }
          }
          projectIndex
          introduction {
            title
            paragraph
          }
        }
        contentfulV1Showcase {
          projectDisplayOrder {
            projectDisplay {
              link
              buttonText
              featuredImage {
                file {
                  url
                }
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
                description
              }
              hoverImage {
                file {
                  url
                }
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              subtitle
              paragraph
              title
            }
          }
        }
      }
    `}
    render={data => {
      const workPageData = data.contentfulV1WorkPage
      const showCaseData = data.contentfulV1Showcase.projectDisplayOrder

      return (
        <React.Fragment>
          <HeaderNavigation></HeaderNavigation>
          <SEO
            description={workPageData.metaData}
            title={workPageData.browserPageTitle}
            keywords={workPageData.keywords}
          />
          <div className="disable">
            <WorkPage workPageData={workPageData}  showCaseData={showCaseData}/>
            <FooterWork/>
          </div>
        </React.Fragment>
      )
    }}
  />
)

export default Work
