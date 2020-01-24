import React from "react"
import footerContactStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"

const FooterContact = () => (
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
      const footerContactData = data.contentfulV1Footer

      return (
        <div className={footerContactStyle.footerContainer}>
          <div className={footerContactStyle.marginContainer}>
            <section className={footerContactStyle.signOffContainer}>
              <span className={footerContactStyle.lineDecorator}></span>
              <div className={footerContactStyle.signOffContent}>
                <figure className={footerContactStyle.imageHolder}>
                  <img
                    className={footerContactStyle.imageSource}
                    src={footerContactData.signOff.carbonWordmark.file.url}
                    alt={footerContactData.signOff.carbonWordmark.title}
                  />
                </figure>
              </div>
            </section>
            <section className={footerContactStyle.contactMessageContainer}>
              <span className={footerContactStyle.lineDecoratorContainer}>
                <span className={footerContactStyle.col70}>
                  <span className={footerContactStyle.lineDecorator}></span>
                </span>
                <span className={footerContactStyle.col30}>
                  <span className={footerContactStyle.lineDecorator}></span>
                </span>
              </span>
              <div className={footerContactStyle.lineDecoratorContainer}>
                <div className={footerContactStyle.col50}></div>
                <div className={footerContactStyle.col50}></div>
              </div>

              <span className={footerContactStyle.multiCultural}>
                {footerContactData.signOff.multiCultural}
              </span>
              <span className={footerContactStyle.legal}>
                {footerContactData.signOff.legal}
              </span>
            </section>
            <section className={footerContactStyle.countriesContainer}>
              <span className={footerContactStyle.lineDecorator}></span>
              <span className={footerContactStyle.countries}>
                {footerContactData.countries}
              </span>
            </section>
          </div>
        </div>
      )
    }}
  />
)

export default FooterContact
