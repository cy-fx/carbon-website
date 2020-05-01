import React from "react"
import footerBlackStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"
import "../../reusable-styles/styles.scss"

const FooterBlack = () => {
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
        const footerBlackData = data.contentfulV1Footer

        return (
          <div className={footerBlackStyle.footerBlackContainer}>
            <div className={footerBlackStyle.backgroundContainer}>
              <div className={footerBlackStyle.marginContainer}>
                <section className={footerBlackStyle.countriesContainer}>
                  <div>
                    <span className={footerBlackStyle.countries}>
                      {footerBlackData.countries}
                    </span>
                    <span className="decoratorContainer desktop">
                      <span className="lineDecorator white start"></span>
                      <span className="lineDecorator white mobile"></span>
                    </span>
                  </div>
                </section>
                <div className={footerBlackStyle.legalAndTextContainer}>
                  <section className={footerBlackStyle.signOffContainer}>
                    <span className="decoratorContainer">
                      <span className="lineDecorator white"></span>
                      <span className="lineDecorator white mobile"></span>
                    </span>
                    <div className={footerBlackStyle.signOffContent}>
                      <figure
                        className={`${footerBlackStyle.logo} ${footerBlackStyle.imageHolder}`}
                      >
                        <img
                          className={footerBlackStyle.imageSource}
                          src={
                            footerBlackData.signOff.carbonWordmarkWhite.file.url
                          }
                          alt={
                            footerBlackData.signOff.carbonWordmarkWhite.title
                          }
                        />
                      </figure>
                      <span className={footerBlackStyle.multiCultural}>
                        {footerBlackData.signOff.multiCultural}
                      </span>
                      <span className={footerBlackStyle.legal}>
                        {footerBlackData.signOff.legal}
                      </span>
                      <nav className={footerBlackStyle.socialMediaNavigation}>
                        {footerBlackData.socialMediaNavigationWhite.navigation.map(
                          (item, index) => (
                            <a
                              target="_blank"
                              rel="noopener"
                              className={footerBlackStyle.socialMediaLink}
                              href={item.link}
                              key={index}
                              
                            >
                              <figure className={footerBlackStyle.imageHolder}>
                                <img
                                  className={footerBlackStyle.imageSource}
                                  src={item.icon.file.url}
                                  alt="Carbón"
                                />
                                <img
                                  className={footerBlackStyle.imageSourceHover}
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
                  <section className={footerBlackStyle.contactMessageContainer}>
                    <span className="decoratorContainer">
                      <span className="lineDecorator white margin-70"></span>
                      <span className="lineDecorator white"></span>
                    </span>
                    <figure
                      className={`${footerBlackStyle.logo} ${footerBlackStyle.imageHolder}`}
                    >
                      <img
                        className={footerBlackStyle.imageSource}
                        src={
                          footerBlackData.signOff.carbonWordmarkWhite.file.url
                        }
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
                      {footerBlackData.text1}
                      {
                        <span className={footerBlackStyle.arrow}>
                          <img
                            className={footerBlackStyle.imageSource}
                            src={footerBlackData.arrow.file.url}
                          />
                        </span>
                      }
                      {footerBlackData.text2}
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

export default FooterBlack
