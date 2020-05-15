import React from "react"
import headerOffCanvasStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"
import { getDate } from "../../utils/date-and-time"
import DisplayTime from "../display-time"


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
          sunBlack{
            file{
              url
            }
          }
          sunWhite{
            file{
              url
            }
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
                      alt="Carbon Agency"
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
                    <span className={headerOffCanvasStyle.date}>{getDate()}</span>
                    <span className={headerOffCanvasStyle.actualTime}>
                      <div>
                        <span>{` {`}</span>
                        <DisplayTime />
                        <span>{`} `}</span>
                      </div>
                    </span>
                    
                    <span className={headerOffCanvasStyle.temperature}>--°</span>
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
                      alt="Carbon Agency"
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
