import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import AgencyPage from "../components/agency-page"
import FooterBlack from "../components/footer-black"
import HeaderWhite from "../components/header-white"

const Agency = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1AgencyPage {
          enLoQueCreemos {
            items {
              ... on ContentfulV1CardType1 {
                id
                title
                paragraph
              }
              ... on ContentfulV1Item {
                id
                name
                text
              }
            }
            listName
          }
          services {
            items {
              ... on ContentfulV1CardType1 {
                id
                title
                paragraph
              }
              ... on ContentfulV1Item {
                id
                text
              }
            }
            listName
          }
          whatWeBelieveIn {
            items {
              ... on ContentfulV1CardType1 {
                id
                name
                title
                paragraph
              }
              ... on ContentfulV1Item {
                id
                name
                text
              }
            }
            listName
          }
          whatWeDo {
            paragraph
            title
          }
          whoWeAre {
            buttonText
            link
            subtitle
            title
            paragraph
          }
          winWinMindset
          winWinMindsetImage {
            file {
              url
            }
          }
          winWinGif {
            file {
              url
            }
          }
          backgroundImage {
            file {
              url
            }
          }
          carbonIconBlack {
            file {
              url
            }
          }
        }
      }
    `}
    render={data => {
      const agencyPageData = data.contentfulV1AgencyPage
      return (
        <React.Fragment>
          <HeaderWhite></HeaderWhite>
          <SEO title="agency" />
          <AgencyPage agencyPageData={agencyPageData} />
          <FooterBlack/>
        </React.Fragment>
      )
    }}
  />
)

export default Agency
