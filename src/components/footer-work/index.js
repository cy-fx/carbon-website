import React from "react"
import footerStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"
import "../../reusable-styles/styles.scss"

const FooterWork = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          contentfulV1Footer {
            text1
            text2
            arrow {
              file {
                url
              }
            }
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
                iconHover {
                  file {
                    url
                  }
                }
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
                iconHover {
                  file {
                    url
                  }
                }
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
                <section className={footerStyle.countriesContainer}>
                  <div>
                    <span className={footerStyle.countries}>
                      {footerData.countries}
                    </span>
                    <span className="decoratorContainer desktop">
                      <span className="lineDecorator black start"></span>
                      <span className="lineDecorator black mobile"></span>
                    </span>
                  </div>
                </section>
                <div className={footerStyle.legalAndTextContainer}>
                  <section className={footerStyle.signOffContainer}>
                    <span className="decoratorContainer">
                      <span className="lineDecorator black"></span>
                      <span className="lineDecorator black mobile"></span>
                    </span>

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
                        {footerData.socialMediaNavigation.navigation.map(
                          (item, index) => (
                            <a
                              target="_blank"
                              className={footerStyle.socialMediaLink}
                              href={item.link}
                              key={item.link}
                              rel="noopener"
                            >
                              <figure className={footerStyle.imageHolder}>
                                <img
                                  className={footerStyle.imageSource}
                                  src={item.icon.file.url}
                                  alt="Carbón"
                                />
                                <img
                                  className={footerStyle.imageSourceHover}
                                  src={item.iconHover.file.url}
                                  alt="Carbón"
                                />
                              </figure>
                            </a>
                          )
                        )}
                      </nav>
                    </div>
                  </section>
                  <section className={footerStyle.contactMessageContainer}>
                    <span className="decoratorContainer">
                      <span className="lineDecorator black margin-70"></span>
                      <span className="lineDecorator black"></span>
                    </span>

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
                      {footerData.text1}
                      {
                        <span className={footerStyle.arrow}>
                          <img
                            className={footerStyle.imageSource}
                            src={footerData.arrow.file.url}
                          />
                        </span>
                      }
                      {footerData.text2}
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
}

export default FooterWork
