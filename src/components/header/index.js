import React from "react"
import headerStyle from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"

const Header = ({navBarClicked}) => (
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
    render={(data ) => {
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
                    <span className={headerStyle.date}>2019 October 31 </span>
                    <span className={headerStyle.actualTime}>
                      {`{04:20 PM}`} //
                    </span>
                    <span className={headerStyle.weatherIcon}>
                      <img
                        className={headerStyle.imageSource}
                        src={headerData.logo.file.url}
                        alt={headerData.logo.title}
                      />
                    </span>
                    <span className={headerStyle.temperature}>69°</span>
                  </div>
                </div>
              </section>
              <section className={headerStyle.navigationContainer}>
                <button onClick={() => navBarClicked()} className={headerStyle.navigationButton}>
                  <div className={headerStyle.hamburger}>
                    <span className={headerStyle.hamburgerLine}></span>
                    <span className={headerStyle.hamburgerLine}></span>
                    <span className={headerStyle.hamburgerLine}></span>
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

export default Header
