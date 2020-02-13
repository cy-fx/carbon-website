import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"
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
            paragraph{
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
        }
      }
    `}
    render={data => {
      const caseStudyData = data.contentfulV1CaseStudyPage
      return (
        <React.Fragment>
          <HeaderNavigation></HeaderNavigation>
          <SEO title="Case Study" />
          <CaseStudyPage caseStudyData={caseStudyData} />
          <Footer />
        </React.Fragment>
      )
    }}
  />
)

export default CaseStudy
