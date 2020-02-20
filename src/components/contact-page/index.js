import contactPageStyle from "./style.module.scss"
import React, { useEffect } from "react"

import "../../reusable-styles/styles.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const ContactPage = ({ contactPageData }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  })

  return (
    <div className={contactPageStyle.backgroundContainer}>
      <div className={contactPageStyle.componentContainer}>
        <div className={contactPageStyle.greeting}>
          <div className={contactPageStyle.winWinContainer}>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
            <figure className={contactPageStyle.winWinSize}>
              <img
                className={contactPageStyle.imageSource}
                src={contactPageData.winWinIcon.file.url}
                alt="Carbón"
              />
            </figure>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
          </div>

          <div
            className={contactPageStyle.getInTouch}
            data-aos="example-anim1"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <span className="decoratorContainer">
              <span className="lineDecorator white margin-55 desktop"></span>
              <span className="lineDecorator white margin-22 desktop"></span>
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
            <p className={contactPageStyle.paragraph}>{contactPageData.text}</p>
            <p className={contactPageStyle.eMail}>{contactPageData.email}</p>
            <nav className={contactPageStyle.socialMediaNavigation}>
              {contactPageData.socialMediaNavigation.navigation.map(item => (
                <a
                  className={contactPageStyle.socialMediaLink}
                  href={item.link}
                  key={item.id}
                >
                  <figure className={contactPageStyle.imageHolder}>
                    <img
                      className={contactPageStyle.imageSource}
                      src={item.icon.file.url}
                      alt={item.title}
                      alt="Carbón"
                    />
                  </figure>
                </a>
              ))}
            </nav>
            <figure>
              <img className={contactPageStyle.halftone} src={contactPageData.dots.file.url}/>
            </figure>
            <p className={contactPageStyle.hablamosEspanol}>
              {`{ Hablamos `}
              {<span className={contactPageStyle.arrow}>-></span>}
              {` Español }`}
            </p>
            <span className="decoratorContainer desktop">
              <span className="lineDecorator white margin-55 hidden"></span>
              <span className="lineDecorator white margin-22"></span>
              <span className="lineDecorator white"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
