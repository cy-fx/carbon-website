import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import offCanvasStyle from "./style.module.scss"
import CarbonAnimationBlue from "../carbon-animation-blue"
import HeaderOffCanvas from "../header-off-canvas"

const OffCanvas = ({navBarClicked}) => (
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
            link
            title
          }
          backgroundImage {
            file {
              url
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
        <div className={offCanvasStyle.backgroundContainer}>
          <div className={offCanvasStyle.carbonAnimation}>
           <CarbonAnimationBlue/>
          </div>
          <HeaderOffCanvas navBarClicked={navBarClicked}/>
          <div className={offCanvasStyle.componentContainer}>
            <section className={offCanvasStyle.signOffContainer}>
              <span className={offCanvasStyle.whiteSpace}></span>
              <div className={offCanvasStyle.signOffContent}>
                <figure className={offCanvasStyle.imageHolder}>
                  <img
                    className={offCanvasStyle.imageSource}
                    src={offCanvasData.signOff.carbonWordmark.file.url}
                    alt={offCanvasData.signOff.carbonWordmark.title}
                  />
                </figure>
                <span className={offCanvasStyle.multiCultural}>
                  {offCanvasData.signOff.multiCultural}
                </span>
                <span className={offCanvasStyle.legal}>
                  {offCanvasData.signOff.legal}
                </span>
                <nav className={offCanvasStyle.socialMediaNavigation}>
                  {offCanvasData.socialMediaNavigation.navigation.map(item => (
                    <a
                      className={offCanvasStyle.socialMediaLink}
                      href={item.link}
                      key={item.id}
                    >
                      <figure className={offCanvasStyle.imageHolder}>
                        <img
                          className={offCanvasStyle.imageSource}
                          src={item.icon.file.url}
                          alt={item.title}
                        />
                      </figure>
                    </a>
                  ))}
                </nav>
              </div>
            </section>
            <section className={offCanvasStyle.navigationSection}>
              {offCanvasData.navigationItems.map(item => (
                <div className={offCanvasStyle.navigationList}>
                  <Link
                    key={item.id}
                    className={offCanvasStyle.link}
                    to={item.link}
                  >
                    {item.title === "Home" ? (
                      <img
                        className={offCanvasStyle.homeIcon}
                        src={item.icon.file.url}
                      />
                    ) : (
                      item.title
                    )}
                  </Link>
                </div>
              ))}
            </section>
          </div>
        </div>
      )
    }}
  />
)
export default OffCanvas
