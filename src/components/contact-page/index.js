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
        <div className={contactPageStyle.greeting} data-aos="example-anim1" data-aos-once="true">
          <div className={contactPageStyle.winWinContainer}>
            <figure className={contactPageStyle.winWinSize}>
              <img
                className={contactPageStyle.imageSource}
                src={contactPageData.winWinIcon.file.url}
                alt="Carbón"
              />
            </figure>
          </div>

          <div className={contactPageStyle.getInTouch}>
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
            <p className={contactPageStyle.hablamosEspanol}>
             {`{ Hablamos `}{<span className={contactPageStyle.arrow}>-></span>}{` Español }`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
