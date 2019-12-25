import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import HomePage from "../components/home-page"
import Footer from "../components/footer"
import Header from "../components/header"


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
          <Header></Header>
          <SEO title="Home" />
          <HomePage homePageData={homePageData} />
          <Footer/>
        </React.Fragment>
      )
    }}
  />
)

export default IndexPage
