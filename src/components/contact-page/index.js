import React from "react"
import contactPageStyle from "./style.module.scss"

const ContactPage = ({ contactPageData }) => {
  return (
    <div className={contactPageStyle.backgroundContainer}>
      <div className={contactPageStyle.componentContainer}>
        <div className={contactPageStyle.greeting}>
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
