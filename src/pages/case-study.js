import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Footer from "../components/footer"
import CaseStudyPage from "../components/case-study-page"
import HeaderNavigation from "../components/header-navigation"

const CaseStudy = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1CaseStudyPage {
          jumbotron {
            heroImage {
              description
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
              file{
                url
              }
              title
            }
            clientName
            headline
          }
          fullWidthImage1 {
            description
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
            file{
              url
            }
          }
          halfWidthImageRight {
            description
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
            file{
              url
            }
          }
          halfWidthImageLeft {
            description
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
            file{
              url
            }
          }
          fullWidthImage2 {
            description
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
            file{
              url
            }
          }
          leadIn {
            title
            paragraph
          }
          testimonial {
            testimonial
            position
            personName
          }
          services {
            listName
            items {
              ... on ContentfulV1Item {
                id
                name
                text
              }
            }
          }
          projectOverview {
            title
            paragraph {
              paragraph
            }
          }
          leadInImage {
            description
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
            file{
              url
            }
          }
          nextArrow{
            file{
              url
            }
          }
        }
      }
    `}
    render={data => {
      const caseStudyData = data.contentfulV1CaseStudyPage
      return (
        <React.Fragment>
          <SEO title="Case Study" />
          <HeaderNavigation></HeaderNavigation>
          <div className="disable">
            <CaseStudyPage caseStudyData={caseStudyData} />
            <Footer />
          </div>
        </React.Fragment>
      )
    }}
  />
)

export default CaseStudy
