import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import HomePage from "../components/home-page"
import Footer from "../components/footer"
import Header from "../components/header"
import HeaderNavigation from "../components/header-navigation"



const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1HomePage {
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
              }
              hoverImage {
                file {
                  url
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
      const homePageData = data.contentfulV1HomePage

      return (
        <React.Fragment>
          <SEO title="Home" />
          <HeaderNavigation/>
          <div className="disable">
            <HomePage homePageData={homePageData} />
            <Footer />
          </div>
        </React.Fragment>
      )
    }}
  />
)

export default IndexPage
