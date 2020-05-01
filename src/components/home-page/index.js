import React, { useEffect } from "react"
import { Link } from "gatsby"
import homePageWhiteStyle from "./style.module.scss"
import SliderWhite from "../slider-white"
import SlideSwipeWhite from "../slider-swipe-white"

import "../../reusable-styles/styles.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const HomePageWhite = ({ homePageWhiteData }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  })
  return (
    <div className={homePageWhiteStyle.backgroundContainer}>
      <div className={homePageWhiteStyle.componentContainer}>
        <section
          className={`${homePageWhiteStyle.heroContainer}`}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <figure className={homePageWhiteStyle.imageHolder}>
            <img
              className={homePageWhiteStyle.imageSource}
              src={homePageWhiteData.heroImage.file.url}
              alt="Carbón"
            />
          </figure>
        </section>

        <section
          className={`${homePageWhiteStyle.greetingsContainer}`}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          {homePageWhiteData.greetings.map((item, index) => (
            <div className={homePageWhiteStyle.greetingsCard} key={index}>
              <span className="decoratorContainer">
                <span className="lineDecorator black"></span>
                <span className="lineDecorator black mobile"></span>
              </span>

              <div className={homePageWhiteStyle.greetingsContent}>
                <p className={homePageWhiteStyle.greetingsParagraph}>
                  {item.paragraph}
                </p>
                <Link className={homePageWhiteStyle.greetingsLink} to={item.link}>
                  <span className={homePageWhiteStyle.link}>{item.buttonText}</span>
                  <span className={homePageWhiteStyle.linkDecoration}></span>
                </Link>
              </div>
              <span className="decoratorContainer">
                <span className="lineDecorator black"></span>
                <span className="lineDecorator black mobile"></span>
              </span>
            </div>
          ))}
          <div className={homePageWhiteStyle.greetingsCard}>
            <span className="decoratorContainer">
              <span className="lineDecorator black"></span>
              <span className="lineDecorator black mobile"></span>
            </span>
            <nav className={homePageWhiteStyle.navigationContainer}>
              <div className={homePageWhiteStyle.navigationPages}>
                {homePageWhiteData.pages.navigation.map((item, index) => (
                  <div className={homePageWhiteStyle.linkHolder} key={index}>
                    <Link
                      className={homePageWhiteStyle.navigationLink}
                      to={item.link}
                    >
                      {item.title}
                      <span className={homePageWhiteStyle.circle}>
                      <figure className={homePageWhiteStyle.imageHolder}>
                        <img
                          className={homePageWhiteStyle.imageSource}
                          src={item.icon.file.url}
                          alt="Circle"
                        />
                      </figure>
                    </span>
                    </Link>
                    
                  </div>
                ))}
              </div>
            </nav>
            <span className="decoratorContainer">
              <span className="lineDecorator black"></span>
              <span className="lineDecorator black mobile"></span>
            </span>
          </div>
        </section>

        <section
          className={homePageWhiteStyle.sliderContainer}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <SliderWhite
            sliderWhiteData={homePageWhiteData.slider}
          />
        </section>

        <section
          className={homePageWhiteStyle.sliderSwipeContainer}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <SlideSwipeWhite sliderSwipeWhiteData={homePageWhiteData.slider}/>
        </section>
        
        <section
          className={`${homePageWhiteStyle.aboutContainer}`}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          {homePageWhiteData.about.map((item, index) => (
            <div className={homePageWhiteStyle.aboutCard} key={index}>
              <span className="decoratorContainer">
                <span className="lineDecorator black"></span>
                <span className="lineDecorator black mobile"></span>
              </span>
              <div className={homePageWhiteStyle.aboutContent}>
                <h3 className={homePageWhiteStyle.aboutTitle}>{item.title}</h3>
                <p className={homePageWhiteStyle.aboutParagraph}>{item.paragraph}</p>
              </div>

              <span className="decoratorContainer desktop">
                <span className="lineDecorator black"></span>
                <span className="lineDecorator black mobile"></span>
              </span>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default HomePageWhite
