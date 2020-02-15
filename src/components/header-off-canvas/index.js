import React from "react"
import headerOffCanvasStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"

const HeaderOffCanvas = ({ navBarClicked }) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1Header {
          logo {
            file {
              url
            }
            title
          }
          logoWhite {
            file {
              url
            }
            title
          }
          location
          closeNavigation
          closeIcon {
            file {
              url
            }
          }
          openNavigation
          menuIcon {
            file {
              url
            }
          }
        }
      }
    `}
    render={data => {
      const headerOffCanvasData = data.contentfulV1Header

      return (
        <div>
          <div className={headerOffCanvasStyle.backgroundContainer}>
            <div className={headerOffCanvasStyle.headerOffCanvasContainer}>
              <section className={headerOffCanvasStyle.homeLogoContainer}>
                <a className={headerOffCanvasStyle.homeLogoLink} href="/">
                  <figure className={headerOffCanvasStyle.imageHolder}>
                    <img
                      className={headerOffCanvasStyle.imageSource}
                      src={headerOffCanvasData.logoWhite.file.url}
                      alt={headerOffCanvasData.logoWhite.title}
                    />
                  </figure>
                </a>
              </section>
              <section className={headerOffCanvasStyle.locationContainer}>
                <div>
                  <div className={headerOffCanvasStyle.location}>
                    {headerOffCanvasData.location}
                  </div>
                  <div className={headerOffCanvasStyle.timeAndWeather}>
                    <span className={headerOffCanvasStyle.date}>
                      2019 October 31{" "}
                    </span>
                    <span className={headerOffCanvasStyle.actualTime}>
                      {`{04:20 PM}`} //
                    </span>
                    <span className={headerOffCanvasStyle.weatherIcon}>
                      <img
                        className={headerOffCanvasStyle.imageSource}
                        src={headerOffCanvasData.logo.file.url}
                        alt={headerOffCanvasData.logo.title}
                      />
                    </span>
                    <span className={headerOffCanvasStyle.temperature}>
                      69°
                    </span>
                  </div>
                </div>
              </section>
              <section className={headerOffCanvasStyle.navigationContainer}>
                <div
                  onClick={() => navBarClicked()}
                  className={headerOffCanvasStyle.navigationButton}
                >
                  <figure className={headerOffCanvasStyle.close}>
                    <img
                      className={headerOffCanvasStyle.closeIcon}
                      src={headerOffCanvasData.closeIcon.file.url}
                      alt="Carbón"
                    />
                  </figure>
                  <span className={headerOffCanvasStyle.closeText}>
                    {headerOffCanvasData.closeNavigation}
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default HeaderOffCanvas
