import React from "react"
import footerWorkStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"

const FooterWork = () => (
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
      const footerWorkData = data.contentfulV1Footer

      return (
        <div className={footerWorkStyle.footerWorkContainer}>
          <div className={footerWorkStyle.backgroundContainer}>
          <div className={footerWorkStyle.marginContainer}>
            <section className={footerWorkStyle.countriesContainer}>
              <span className={footerWorkStyle.countries}>
                {footerWorkData.countries}
              </span>
            </section>
            <div className={footerWorkStyle.legalAndTextContainer}>
              <section className={footerWorkStyle.signOffContainer}>
                <div className={footerWorkStyle.signOffContent}>
                  <figure
                    className={`${footerWorkStyle.logo} ${footerWorkStyle.imageHolder}`}
                  >
                    <img
                      className={footerWorkStyle.imageSource}
                      src={footerWorkData.signOff.carbonWordmark.file.url}
                      alt={footerWorkData.signOff.carbonWordmark.title}
                    />
                  </figure>
                  <span className={footerWorkStyle.multiCultural}>
                    {footerWorkData.signOff.multiCultural}
                  </span>
                  <span className={footerWorkStyle.legal}>
                    {footerWorkData.signOff.legal}
                  </span>
                  <nav className={footerWorkStyle.socialMediaNavigation}>
                    {footerWorkData.socialMediaNavigation.navigation.map(item => (
                      <a
                        className={footerWorkStyle.socialMediaLink}
                        href={item.link}
                        key={item.id}
                      >
                        <figure className={footerWorkStyle.imageHolder}>
                          <img
                            className={footerWorkStyle.imageSource}
                            src={item.icon.file.url}
                            alt={item.title}
                          />
                        </figure>
                      </a>
                    ))}
                  </nav>
                </div>
              </section>
              <section className={footerWorkStyle.contactMessageContainer}>
                <figure
                  className={`${footerWorkStyle.logo} ${footerWorkStyle.imageHolder}`}
                >
                  <img
                    className={footerWorkStyle.imageSource}
                    src={footerWorkData.signOff.carbonWordmark.file.url}
                    alt={footerWorkData.signOff.carbonWordmark.title}
                  />
                </figure>
                <p className={footerWorkStyle.contactMessageText}>
                  {footerWorkData.paragraph}
                </p>
                <span className={footerWorkStyle.contactMessageEmail}>
                  {footerWorkData.email}
                </span>
                <p className={footerWorkStyle.hablamosEspanol}>
             {`{ Hablamos `}{<span className={footerWorkStyle.arrow}>-></span>}{` Español }`}
            </p>
              </section>
            </div>
          </div>
        </div>
        </div>
      )
    }}
  />
)

export default FooterWork
