import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import HomePage from "../components/home-page"
import Footer from "../components/footer"
import Header from "../components/header"
import HeaderNavigation from "../components/header-navigation"

import "../reusable-styles/styles.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  duration: 800,
  
})

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
                }
                file {
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
