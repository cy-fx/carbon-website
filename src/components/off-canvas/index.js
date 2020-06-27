import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import offCanvasStyle from "./style.module.scss"
import HeaderOffCanvas from "../header-off-canvas"
import "../../reusable-styles/styles.scss"

const OffCanvas = ({ navBarClicked, pagePath }) => {
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  })

  return (
    <StaticQuery
      query={graphql`
        query {
          contentfulV1OffCanvas {
            navigationItems {
              icon {
                file {
                  url
                }
              }
              iconHover {
                file {
                  url
                }
              }

              link
              title
            }
            backgroundImage {
              file {
                url
              }
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            signOff {
              legal
              multiCultural
              carbonWordmark {
                file {
                  url
                }
                title
              }
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
          }
        }
      `}
      render={data => {
        const offCanvasData = data.contentfulV1OffCanvas
        return (
          <div className={offCanvasStyle.offCanvasContainer}>
            <div className={offCanvasStyle.lsdContainerAbsolute}>
              <figure className={offCanvasStyle.imageHolder}>
                <Img
                  className={offCanvasStyle.imageSource}
                  fluid={offCanvasData.backgroundImage.fluid}
                  alt="Carbon Agency"
                />
              </figure>
            </div>
            <div className={offCanvasStyle.backgroundContainer}>
              <HeaderOffCanvas navBarClicked={navBarClicked} />
              <div
                className={offCanvasStyle.componentContainer}
                data-aos="example-anim1"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                <section className={offCanvasStyle.signOffContainer}>
                  <div className={offCanvasStyle.signOffContent}>
                    <span className="decoratorContainer desktop">
                      <span className="lineDecorator black"></span>
                      <span className="lineDecorator black mobile"></span>
                    </span>
                    <span
                      className={`decoratorContainer desktop space-y-195-185 ${offCanvasStyle.tablet}`}
                    >
                      <span className="lineDecorator black "></span>
                    </span>
                    <figure className={offCanvasStyle.imageHolder}>
                      <img
                        className={offCanvasStyle.imageSource}
                        src={offCanvasData.signOff.carbonWordmark.file.url}
                        alt="Carbon Agency"
                      />
                    </figure>
                    <span className="decoratorContainer mobile">
                      <span className="lineDecorator black"></span>
                      <span className="lineDecorator black mobile"></span>
                    </span>
                    <span className={offCanvasStyle.multiCultural}>
                      {offCanvasData.signOff.multiCultural}
                    </span>
                    <span className={offCanvasStyle.legal}>
                      {offCanvasData.signOff.legal}
                    </span>
                    <nav className={offCanvasStyle.socialMediaNavigation}>
                      {offCanvasData.socialMediaNavigation.navigation.map(
                        (item, index) => (
                          <a
                            target="_blank"
                            className={offCanvasStyle.socialMediaLink}
                            href={item.link}
                            key={index}
                            rel="noopener"
                          >
                            <figure className={offCanvasStyle.imageHolder}>
                              <img
                                className={offCanvasStyle.imageSource}
                                src={item.icon.file.url}
                                alt="Carbon Agency"
                              />
                              <img
                                className={offCanvasStyle.imageSourceHover}
                                src={item.iconHover.file.url}
                                alt="Carbon Agency"
                              />
                            </figure>
                          </a>
                        )
                      )}
                    </nav>
                  </div>
                </section>
                <section className={offCanvasStyle.navigationSection}>
                  <span className="decoratorContainer desktop">
                    <span className="lineDecorator black"></span>
                    <span className="lineDecorator black mobile"></span>
                  </span>
                  <div className={offCanvasStyle.navigationContainer}>
                    {offCanvasData.navigationItems.map((item, index) => (
                      <div
                        key={index}
                        className={offCanvasStyle.navigationList}
                      >
                        <Link
                          className={
                            currentPath === `${item.link}`
                              ? `${offCanvasStyle.link} ${offCanvasStyle.notActive}`
                              : `${offCanvasStyle.link}`
                          }
                          to={item.link}
                        >
                          {item.title === "Home" ? (
                            <span className={offCanvasStyle.navItem}>
                              <img
                                className={offCanvasStyle.homeIcon}
                                src={
                                  currentPath === "/"
                                    ? item.iconHover.file.url
                                    : item.icon.file.url
                                }
                                alt="Carbon Agency"
                              />
                              <img
                                className={offCanvasStyle.homeIconHover}
                                src={item.iconHover.file.url}
                                alt="Carbon Agency"
                              />
                              <span
                                className={offCanvasStyle.homeNavSlash}
                              ></span>
                            </span>
                          ) : (
                            <span className={offCanvasStyle.navItem}>
                              <span>{item.title}</span>
                              <span className={offCanvasStyle.navSlash}></span>
                            </span>
                          )}
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}
export default OffCanvas
