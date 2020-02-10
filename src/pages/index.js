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
            }
          }
          slider {
            featuredProjects {
              hoverImage {
                description
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }file {
                  url
                }
                title
              }
            }
            title
            featuredProjects {
              featuredImage {
                description
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
                file {
                  url
                }
                title
              }
              slideDescription {
                buttonText
                link
                name
                icon {
                  file {
                    url
                  }
                }
                paragraph
                title
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
          <HeaderNavigation></HeaderNavigation>
          <HomePage homePageData={homePageData} />
          <Footer />
        </React.Fragment>
      )
    }}
  />
)

export default IndexPage
