import React from "react"
import headerWhiteStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"

const HeaderWhite = ({ navBarClicked }) => (
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
        }
      }
    `}
    render={data => {
      const headerWhiteData = data.contentfulV1Header

      return (
        <div>
          <div className={headerWhiteStyle.backgroundContainer}>
            <div className={headerWhiteStyle.headerWhiteContainer}>
              <section className={headerWhiteStyle.homeLogoContainer}>
                <a className={headerWhiteStyle.homeLogoLink} href="/">
                  <figure className={headerWhiteStyle.imageHolder}>
                    <img
                      className={headerWhiteStyle.imageSource}
                      src={headerWhiteData.logoWhite.file.url}
                      alt={headerWhiteData.logo.title}
                    />
                  </figure>
                </a>
              </section>
              <section className={headerWhiteStyle.locationContainer}>
                <div>
                  <div className={headerWhiteStyle.location}>
                    {headerWhiteData.location}
                  </div>
                  <div className={headerWhiteStyle.timeAndWeather}>
                    <span className={headerWhiteStyle.date}>
                      2019 October 31{" "}
                    </span>
                    <span className={headerWhiteStyle.actualTime}>
                      {`{04:20 PM}`} //
                    </span>
                    <span className={headerWhiteStyle.weatherIcon}>
                      <img
                        className={headerWhiteStyle.imageSource}
                        src={headerWhiteData.logo.file.url}
                        alt={headerWhiteData.logo.title}
                      />
                    </span>
                    <span className={headerWhiteStyle.temperature}>69°</span>
                  </div>
                </div>
              </section>
              <section className={headerWhiteStyle.navigationContainer}>
                <button
                  onClick={() => navBarClicked()}
                  className={headerWhiteStyle.navigationButton}
                >
                  <div className={headerWhiteStyle.hamburger}>
                    <span className={headerWhiteStyle.hamburgerLine}></span>
                    <span className={headerWhiteStyle.hamburgerLine}></span>
                    <span className={headerWhiteStyle.hamburgerLine}></span>
                  </div>
                </button>
              </section>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default HeaderWhite
