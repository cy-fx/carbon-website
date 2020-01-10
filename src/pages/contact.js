import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import ContactPage from "../components/contact-page"
import Footer from "../components/footer"
import Header from "../components/header"


const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1ContactPage {
          text
          email
          socialMediaNavigation {
            navigation {
              link
              title
              icon {
                file {
                  url
                }
              }
            }
          }
          dots {
            file {
              url
            }
          }
          winWinIcon {
            file {
              url
            }
          }
        }
      }
    `}
    render={data => {
      const contactPageData = data.contentfulV1ContactPage
      return (
        <React.Fragment>
          <Header></Header>
          <SEO title="Contact" />
          <ContactPage contactPageData={contactPageData} />
          <Footer/>
        </React.Fragment>
      )
    }}
  />
)

export default Contact
