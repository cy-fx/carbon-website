import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Footer from "../components/footer"
import CaseStudyPage from "../components/case-study-page"
import HeaderNavigation from "../components/header-navigation"

export default ({ data, pageContext }) => {
  const caseStudyData = data.contentfulV1CaseStudyPage
  return (
    <React.Fragment>
      <SEO title="Case Study" />
      <HeaderNavigation></HeaderNavigation>
      <div className="disable">
        <CaseStudyPage
          caseStudyData={caseStudyData}
          older={pageContext.previous}
          newer={pageContext.next}
          pageContext={pageContext}
        />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulV1CaseStudyPage(slug: { eq: $slug }) {
      jumbotron {
        heroImage {
          description
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          file {
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
        file {
          url
        }
      }
      halfWidthImageRight {
        description
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        title
        file {
          url
        }
      }
      halfWidthImageLeft {
        description
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        title
        file {
          url
        }
      }
      fullWidthImage2 {
        description
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        title
        file {
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
        file {
          url
        }
      }
      nextArrow {
        file {
          url
        }
      }
    }
  }
`
