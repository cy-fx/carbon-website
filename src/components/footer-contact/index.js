import React from "react"
import footerStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"

const Footer = () => (
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
                  <span className="decoratorContainer">
                    <span className="lineDecorator black"></span>
                    <span className="lineDecorator black mobile"></span>
                  </span>
                  <img
                    className={footerStyle.imageSource}
                    src={footerData.signOff.carbonWordmark.file.url}
                    alt="Carbon Agency"
                  />
                </figure>
                <div className={footerStyle.multiLegal}>
                  <span className="decoratorContainer">
                    <span className="lineDecorator black  margin-64 desktop"></span>
                    <span className="lineDecorator black"></span>
                    <span className="lineDecorator black mobile"></span>
                  </span>
                  <span className={footerStyle.multiCultural}>
                    {footerData.signOff.multiCultural}
                  </span>
                  <span className={footerStyle.legal}>
                    {footerData.signOff.legal}
                  </span>
                </div>
                <section className={footerStyle.countriesContainer}>
                  <span className="decoratorContainer desktop">
                    <span className="lineDecorator black"></span>
                    <span className="lineDecorator black mobile"></span>
                  </span>
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
