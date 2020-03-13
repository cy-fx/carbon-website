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
                description
              }
              hoverImage {
                file {
                  url
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
          <SEO title="Work" />
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
