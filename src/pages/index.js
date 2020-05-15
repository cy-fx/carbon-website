import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import FooterBlack from "../components/footer-black"
import HeaderNavigation from "../components/header-navigation"
import HomePageWhite from "../components/home-page"



const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1HomePage {
          browserPageTitle
          keywords
          metaData
          slug
          heroImage {
            file {
              url
              fileName
            }
          }
          greetings {
            link
            paragraph
            buttonText
          }
          pages {
            navigation {
              title
              link
              icon{
                file{
                  url
                }
              }
            }
          }
          slider {
            halftone {
              file {
                url
              }
              title
            }
            logoIcon {
              file {
                url
              }
              title
            }
            featuredProjects {
              featuredImage {
                file {
                  url
                }
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              hoverImage {
                file {
                  url
                }
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              link
              subtitle
              paragraph
              title
              buttonText
            }
            leftArrow{
              file{
                url
              }
            }
            rightArrow{
              file{
                url
              }
            }
          }
          about {
            paragraph
            title
          }
        }
      }
    `}
    render={data => {
      const homePageWhiteData = data.contentfulV1HomePage

      return (
        <React.Fragment>
           <SEO
            description={homePageWhiteData.metaData}
            title={homePageWhiteData.browserPageTitle}
            keywords={homePageWhiteData.keywords}
          />
          <HeaderNavigation whiteNavBar={true}/>
          <div className="disable">
            <HomePageWhite homePageWhiteData={homePageWhiteData} />
            <FooterBlack />
          </div>
        </React.Fragment>
      )
    }}
  />
)

export default IndexPage
