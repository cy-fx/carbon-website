import React from "react"
import footerBlackStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"

const FooterBlack = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1Footer {
          countries
          signOff {
            carbonWordmarkWhite {
              file {
                url
              }
              id
              title
            }
            legal
            multiCultural
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
      const footerBlackData = data.contentfulV1Footer

      return (
        <div className={footerBlackStyle.footerBlackContainer}>
          <div className={footerBlackStyle.backgroundContainer}>
          <div className={footerBlackStyle.marginContainer}>
            <section className={footerBlackStyle.countriesContainer}>
              <span className={footerBlackStyle.countries}>
                {footerBlackData.countries}
              </span>
            </section>
            <div className={footerBlackStyle.legalAndTextContainer}>
              <section className={footerBlackStyle.signOffContainer}>
                <div className={footerBlackStyle.signOffContent}>
                  <figure
                    className={`${footerBlackStyle.logo} ${footerBlackStyle.imageHolder}`}
                  >
                    <img
                      className={footerBlackStyle.imageSource}
                      src={footerBlackData.signOff.carbonWordmarkWhite.file.url}
                      alt={footerBlackData.signOff.carbonWordmarkWhite.title}
                    />
                  </figure>
                  <span className={footerBlackStyle.multiCultural}>
                    {footerBlackData.signOff.multiCultural}
                  </span>
                  <span className={footerBlackStyle.legal}>
                    {footerBlackData.signOff.legal}
                  </span>
                  <nav className={footerBlackStyle.socialMediaNavigation}>
                    {footerBlackData.socialMediaNavigationWhite.navigation.map(item => (
                      <a
                        className={footerBlackStyle.socialMediaLink}
                        href={item.link}
                        key={item.id}
                      >
                        <figure className={footerBlackStyle.imageHolder}>
                          <img
                            className={footerBlackStyle.imageSource}
                            src={item.icon.file.url}
                            alt={item.title}
                          />
                        </figure>
                      </a>
                    ))}
                  </nav>
                </div>
              </section>
              <section className={footerBlackStyle.contactMessageContainer}>
                <figure
                  className={`${footerBlackStyle.logo} ${footerBlackStyle.imageHolder}`}
                >
                  <img
                    className={footerBlackStyle.imageSource}
                    src={footerBlackData.signOff.carbonWordmarkWhite.file.url}
                    alt={footerBlackData.signOff.carbonWordmarkWhite.title}
                  />
                </figure>
                <p className={footerBlackStyle.contactMessageText}>
                  {footerBlackData.paragraph}
                </p>
                <span className={footerBlackStyle.contactMessageEmail}>
                  {footerBlackData.email}
                </span>
                <p className={footerBlackStyle.hablamosEspanol}>
             {`{ Hablamos `}{<span className={footerBlackStyle.arrow}>-></span>}{` Español }`}
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

export default FooterBlack
