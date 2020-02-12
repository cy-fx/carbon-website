import React from "react"
import footerStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1Footer {
          countries
          signOff {
            carbonWordmark {
              file {
                url
              }
              id
              title
            }
            legal
            multiCultural
          }
          socialMediaNavigation {
            navigation {
              icon {
                file {
                  url
                }
                title
              }
              link
              title
            }
          }
          paragraph
          email
        }
      }
    `}
    render={data => {
      const footerData = data.contentfulV1Footer

      return (
        <div className={footerStyle.footerContainer}>
          <div className={footerStyle.backgroundContainer}>
          <div className={footerStyle.marginContainer}>
            <section className={footerStyle.signOffContainer}>
                <figure
                  className={`${footerStyle.logo} ${footerStyle.imageHolder}`}
                >
                  <img
                    className={footerStyle.imageSource}
                    src={footerData.signOff.carbonWordmark.file.url}
                    alt={footerData.signOff.carbonWordmark.title}
                  />
                </figure>
                <div className={footerStyle.multiLegal}>
                  <span className={footerStyle.multiCultural}>
                    {footerData.signOff.multiCultural}
                  </span>
                  <span className={footerStyle.legal}>
                    {footerData.signOff.legal}
                  </span>
                </div>
                <section className={footerStyle.countriesContainer}>
                  <span className={footerStyle.countries}>
                    {footerData.countries}
                  </span>
                </section>
            </section>
          </div>
        </div>
        </div>
      )
    }}
  />
)

export default Footer
