import React from "react"
import headerWhiteStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"

const HeaderWhite = () => (
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
        }
      }
    `}
    render={data => {
      const headerData = data.contentfulV1Header

      return (
        <div className={headerWhiteStyle.headerContainer}>
          <section className={headerWhiteStyle.homeLogoContainer}>
            <a className={headerWhiteStyle.homeLogoLink} href>
              <figure className={headerWhiteStyle.imageHolder}>
                <img
                  className={headerWhiteStyle.imageSource}
                  src={headerData.logo.file.url}
                  alt={headerData.logo.title}
                />
              </figure>
            </a>
          </section>
          <section className={headerWhiteStyle.locationContainer}>
            <div>
              <div className={headerWhiteStyle.location}>{headerData.location}</div>
              <div className={headerWhiteStyle.timeAndWeather}>
                <span className={headerWhiteStyle.date}>2019 October 31 </span>
                <span className={headerWhiteStyle.actualTime}>{`{04:20 PM}`} //</span>
                <span className={headerWhiteStyle.weatherIcon}>
                  <img
                    className={headerWhiteStyle.imageSource}
                    src={headerData.logo.file.url}
                    alt={headerData.logo.title}
                  />
                </span>
                <span className={headerWhiteStyle.temperature}>69°</span>
              </div>
            </div>
          </section>
          <section className={headerWhiteStyle.navigationContainer}>
            <button className={headerWhiteStyle.navigationButton}>
              <div className={headerWhiteStyle.hamburger}>
                <span className={headerWhiteStyle.hamburgerLine}></span>
                <span className={headerWhiteStyle.hamburgerLine}></span>
                <span className={headerWhiteStyle.hamburgerLine}></span>
              </div>
            </button>
          </section>
        </div>
      )
    }}
  />
)

export default HeaderWhite
