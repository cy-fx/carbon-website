import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import AgencyPage from "../components/agency-page"
import FooterBlack from "../components/footer-black"
import HeaderWhite from "../components/header-white"
import HeaderNavigation from "../components/header-navigation"

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
            listName
            items {
              ... on ContentfulV1List {
                id
                name
                items {
                  ... on ContentfulV1Item {
                    id
                    name
                    text
                  }
                }
              }
            }
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
            subtitle1
            subtitle2
            paragraph3
            paragraph2
            paragraph1
            title
            image2 {
              file {
                url
              }
            }
            image1 {
              file {
                url
              }
            }
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
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          carbonIconBlack {
            file {
              url
            }
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          arrowIcon {
            file {
              url
            }
          }
          viewWorkImage {
            file {
              url
            }
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          viewWorkLink
          viewWork
          nextArrow {
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
          <HeaderNavigation whiteNavBar={true} />
          <SEO title="agency" />
          <div className="disable">
            <AgencyPage agencyPageData={agencyPageData} />
            <FooterBlack />
          </div>
        </React.Fragment>
      )
    }}
  />
)

export default Agency
