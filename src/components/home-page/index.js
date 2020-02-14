import React from "react"
import { Link } from "gatsby"
import homePageStyle from "./style.module.scss"
import Img from "gatsby-image"
import Slider from "../slider"

const HomePage = ({ homePageData }) => {
  return (
    <div className={homePageStyle.backgroundContainer}>
      <div className={homePageStyle.componentContainer}>
        <section className={homePageStyle.heroContainer}>
          <figure className={homePageStyle.imageHolder}>
            <img
              className={homePageStyle.imageSource}
              src={homePageData.heroImage.file.url}
              alt="Carbón"
            />
          </figure>
        </section>

        <section className={homePageStyle.greetingsContainer}>
          {homePageData.greetings.map(item => (
            <div className={homePageStyle.greetingsCard} key={item.id}>
              <div className={homePageStyle.greetingsContent}>
                <p className={homePageStyle.greetingsParagraph}>
                  {item.paragraph}
                </p>
                <Link className={homePageStyle.greetingsLink} to={item.link}>
                    <span className={homePageStyle.link}>{item.buttonText}</span>
                    <span className={homePageStyle.linkDecoration}></span>
                </Link>
              </div>
            </div>
          ))}
          <div className={homePageStyle.greetingsCard}>
            <nav className={homePageStyle.navigationContainer}>
              <div className={homePageStyle.navigationPages}>
                {homePageData.pages.navigation.map(item => (
                  <Link
                    className={homePageStyle.navigationLink}
                    key={item.id}
                    to={item.link}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </section>

        <section className={homePageStyle.sliderContainer}>
          <Slider sliderData={homePageData.slider} />
        </section>
        <section className={homePageStyle.aboutContainer}>
          {homePageData.about.map(item => (
            <div className={homePageStyle.aboutCard} key={item.id}>
              <div className={homePageStyle.aboutContent}>
                <h3 className={homePageStyle.aboutTitle}>{item.title}</h3>
                <p className={homePageStyle.aboutParagraph}>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default HomePage
