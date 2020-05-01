import React from "react"
import headerStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"
import { getDate } from "../../utils/date-and-time"
import DisplayTime from "../display-time"

const Header = ({ navBarClicked }) => (
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
          location
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
        }
      }
    `}
    render={data => {
      const headerData = data.contentfulV1Header

      return (
        <div>
          <div className={headerStyle.backgroundContainer}>
            <div className={headerStyle.headerContainer}>
              <section className={headerStyle.homeLogoContainer}>
                <a className={headerStyle.homeLogoLink} href="/">
                  <figure className={headerStyle.imageHolder}>
                    <img
                      className={headerStyle.imageSource}
                      src={headerData.logo.file.url}
                      alt={headerData.logo.title}
                    />
                  </figure>
                </a>
              </section>
              <section className={headerStyle.locationContainer}>
                <div>
                  <div className={headerStyle.location}>
                    {headerData.location}
                  </div>
                  <div className={headerStyle.timeAndWeather}>
                    <span className={headerStyle.date}>{getDate()}</span>
                    <span className={headerStyle.actualTime}>
                      <div>
                        <span>{` {`}</span>
                        <DisplayTime />
                        <span>{`} `}</span>
                      </div>
                    </span>
                    
                    <span className={headerStyle.temperature}>--°</span>
                  </div>
                </div>
              </section>
              <section className={headerStyle.navigationContainer}>
                <div
                  onClick={() => navBarClicked()}
                  className={headerStyle.navigationButton}
                >
                  <div className={headerStyle.hamburger}>
                    <span className={headerStyle.hamburgerLine}></span>
                    <span className={headerStyle.hamburgerLine}></span>
                    <span className={headerStyle.hamburgerLine}></span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default Header
