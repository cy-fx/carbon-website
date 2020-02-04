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
          socialMediaNavigationWhite {
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
            <section className={footerStyle.countriesContainer}>
              <span className={footerStyle.countries}>
                {footerData.countries}
              </span>
            </section>
            <div className={footerStyle.legalAndTextContainer}>
              <section className={footerStyle.signOffContainer}>
                <div className={footerStyle.signOffContent}>
                  <figure
                    className={`${footerStyle.logo} ${footerStyle.imageHolder}`}
                  >
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
                <figure
                  className={`${footerStyle.logo} ${footerStyle.imageHolder}`}
                >
                  <img
                    className={footerStyle.imageSource}
                    src={footerData.signOff.carbonWordmark.file.url}
                    alt={footerData.signOff.carbonWordmark.title}
                  />
                </figure>
                <p className={footerStyle.contactMessageText}>
                  {footerData.paragraph}
                </p>
                <span className={footerStyle.contactMessageEmail}>
                  {footerData.email}
                </span>
                <p className={footerStyle.hablamosEspanol}>
             {`{ Hablamos `}{<span className={footerStyle.arrow}>-></span>}{` Español }`}
            </p>
              </section>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default Footer
