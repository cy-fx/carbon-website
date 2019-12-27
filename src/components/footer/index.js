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
          <div className={footerStyle.marginContainer}>
            <section className={footerStyle.signOffContainer}>
              <span className={footerStyle.whiteSpace}></span>
              <span className={footerStyle.lineDecorator}></span>
              <div className={footerStyle.signOffContent}>
                <figure className={footerStyle.imageHolder}>
                  <img
                    className={footerStyle.imageSource}
                    src={footerData.signOff.carbonWordmark.file.url}
                    alt={footerData.signOff.carbonWordmark.title}
                  />
                </figure>
                <span className={footerStyle.multiCultural}>
                  {footerData.signOff.multiCultural}
                </span>
                <span className={footerStyle.legal}>
                  {footerData.signOff.legal}
                </span>
                <nav className={footerStyle.socialMediaNavigation}>
                  {footerData.socialMediaNavigation.navigation.map(item => (
                    <a
                      className={footerStyle.socialMediaLink}
                      href={item.link}
                      key={item.id}
                    >
                      <figure className={footerStyle.imageHolder}>
                        <img
                          className={footerStyle.imageSource}
                          src={item.icon.file.url}
                          alt={item.title}
                        />
                      </figure>
                    </a>
                  ))}
                </nav>
              </div>
            </section>
            <section className={footerStyle.contactMessageContainer}>
              <span className={footerStyle.whiteSpace}></span>
              <span className={footerStyle.lineDecoratorContainer}>
                <span className={footerStyle.col70}>
                  <span className={footerStyle.lineDecorator}></span>
                </span>
                <span className={footerStyle.col30}>
                  <span className={footerStyle.lineDecorator}></span>
                </span>
              </span>
              <div className={footerStyle.lineDecoratorContainer}>
                <div className={footerStyle.col50}></div>
                <div className={footerStyle.col50}></div>
              </div>

              <p className={footerStyle.contactMessageText}>
                {footerData.paragraph}
              </p>
              <span className={footerStyle.contactMessageEmail}>
                {footerData.email}
              </span>
            </section>
            <section className={footerStyle.countriesContainer}>
              <span className={footerStyle.whiteSpace}>
                <span className={footerStyle.countries}>
                  {footerData.countries}
                </span>
              </span>
              <span className={footerStyle.lineDecorator}></span>
            </section>
          </div>
        </div>
      )
    }}
  />
)

export default Footer
