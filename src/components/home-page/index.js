import React, { useEffect } from "react"
import { Link } from "gatsby"
import homePageStyle from "./style.module.scss"
import Slider from "../slider"

import "../../reusable-styles/styles.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const HomePage = ({ homePageData }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  })
  return (
    <div className={homePageStyle.backgroundContainer}>
      <div className={homePageStyle.componentContainer}>
        <section
          className={`${homePageStyle.heroContainer}`}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <figure className={homePageStyle.imageHolder}>
            <img
              className={homePageStyle.imageSource}
              src={homePageData.heroImage.file.url}
              alt="Carbón"
            />
          </figure>
        </section>

        <section
          className={`${homePageStyle.greetingsContainer}`}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          {homePageData.greetings.map(item => (
            <div className={homePageStyle.greetingsCard} key={item.id}>
              <span className="decoratorContainer">
                <span className="lineDecorator white"></span>
                <span className="lineDecorator white mobile"></span>
              </span>

              <div className={homePageStyle.greetingsContent}>
                <p className={homePageStyle.greetingsParagraph}>
                  {item.paragraph}
                </p>
                <Link className={homePageStyle.greetingsLink} to={item.link}>
                  <span className={homePageStyle.link}>{item.buttonText}</span>
                  <span className={homePageStyle.linkDecoration}></span>
                </Link>
              </div>
              <span className="decoratorContainer">
                <span className="lineDecorator white"></span>
                <span className="lineDecorator white mobile"></span>
              </span>
            </div>
          ))}
          <div className={homePageStyle.greetingsCard}>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
            <nav className={homePageStyle.navigationContainer}>
              <div className={homePageStyle.navigationPages}>
                {homePageData.pages.navigation.map(item => (
                  <div className={homePageStyle.linkHolder} key={item.id}>
                    <Link
                      className={homePageStyle.navigationLink}
                      to={item.link}
                    >
                      {item.title}
                      <span className={homePageStyle.circle}>
                      <figure className={homePageStyle.imageHolder}>
                        <img
                          className={homePageStyle.imageSource}
                          src={item.icon.file.url}
                        />
                      </figure>
                    </span>
                    </Link>
                    
                  </div>
                ))}
              </div>
            </nav>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
          </div>
        </section>

        <section
          className={homePageStyle.sliderContainer}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <Slider
            sliderData={homePageData.slider}
            homePageData={homePageData}
          />
        </section>
        <section
          className={`${homePageStyle.aboutContainer}`}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          {homePageData.about.map(item => (
            <div className={homePageStyle.aboutCard} key={item.id}>
              <span className="decoratorContainer">
                <span className="lineDecorator white"></span>
                <span className="lineDecorator white mobile"></span>
              </span>
              <div className={homePageStyle.aboutContent}>
                <h3 className={homePageStyle.aboutTitle}>{item.title}</h3>
                <p className={homePageStyle.aboutParagraph}>{item.paragraph}</p>
              </div>

              <span className="decoratorContainer desktop">
                <span className="lineDecorator white"></span>
                <span className="lineDecorator white mobile"></span>
              </span>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default HomePage
