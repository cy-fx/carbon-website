import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import ContactPage from "../components/contact-page"
import FooterContact from "../components/footer-contact"
import Header from "../components/header"
import HeaderNavigation from "../components/header-navigation"

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1ContactPage {
          text1
          text2
          arrow {
            file {
              url
            }
          }
          text
          email
          socialMediaNavigation {
            navigation {
              link
              title
              iconHover {
                file {
                  url
                }
              }
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
          <SEO title="Contact" />
          <HeaderNavigation></HeaderNavigation>
          <div className="disable relative">
            <ContactPage contactPageData={contactPageData} />
            <FooterContact />
          </div>
        </React.Fragment>
      )
    }}
  />
)

export default Contact
