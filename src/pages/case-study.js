import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"
import CaseStudyPage from "../components/case-study-page"

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
          }
          halfWidthImageRight {
            description
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
          }
          halfWidthImageLeft {
            description
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
          }
          fullWidthImage2 {
            description
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
          }
          leadIn {
            title
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
                }
              }
          }
          projectOverview {
            title
            paragraph
          }
          leadInImage {
            description
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
          }
        }
      }
    `}
    render={data => {
      const caseStudyData = data.contentfulV1CaseStudyPage

      return (
        <React.Fragment>
          <Header></Header>
          <SEO title="Case Study" />
          <CaseStudyPage caseStudyData={caseStudyData} />
          <Footer />
        </React.Fragment>
      )
    }}
  />
)

export default CaseStudy
