import agencyPageStyle from "./style.module.scss"
import { Link } from "gatsby"
import React, { useEffect } from "react"

import "../../reusable-styles/styles.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const AgencyPage = ({ agencyPageData }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  })

  return (
    <div className={agencyPageStyle.backgroundContainer}>
      <div className={agencyPageStyle.componentContainer}>
        <section
          className={agencyPageStyle.whoWeAreSection}
          data-aos="example-anim1"
          data-aos-once="true"
        >
          <div className={agencyPageStyle.lsdContainerAbsolute}>
            <figure className={agencyPageStyle.lsdSize}>
              <img
                className={agencyPageStyle.imageSource}
                src={agencyPageData.backgroundImage.file.url}
                alt="Carbón"
              />
            </figure>
          </div>

          <div className={agencyPageStyle.whoWeAreCard}>
            <h4 className={agencyPageStyle.title}>
              {agencyPageData.whoWeAre.title}
            </h4>
            <h2 className={agencyPageStyle.subtitle}>
              {agencyPageData.whoWeAre.subtitle}
            </h2>
            <p className={agencyPageStyle.paragraph}>
              {agencyPageData.whoWeAre.paragraph}
            </p>
            <p className={agencyPageStyle.paragraph}>
              {agencyPageData.whoWeAre.buttonText}
            </p>
          </div>
          <div className={agencyPageStyle.winWinContainerAbsolute}>
            <figure className={agencyPageStyle.winWinSize}>
              <img
                className={agencyPageStyle.imageSource}
                src={agencyPageData.winWinGif.file.url}
                alt="Carbón"
              />
            </figure>
          </div>
        </section>
        <section
          className={agencyPageStyle.whatWeBelieveInSection}
          data-aos="example-anim1"
          data-aos-once="true"
        >
          <div className={agencyPageStyle.whatWeBelieveInCard}>
            <h4 className={agencyPageStyle.title}>
              {agencyPageData.whatWeBelieveIn.listName}
            </h4>
            {agencyPageData.whatWeBelieveIn.items.map(item => (
              <p className={agencyPageStyle.word}>{item.text}</p>
            ))}
          </div>
          <div className={agencyPageStyle.enLoQueCreemosCard}>
            <h4 className={agencyPageStyle.title}>
              {agencyPageData.enLoQueCreemos.listName}
            </h4>
            {agencyPageData.enLoQueCreemos.items.map(item => (
              <div className={agencyPageStyle.description}>
                <h5 className={agencyPageStyle.listTitle}>{item.title}</h5>
                <p className={agencyPageStyle.listParagraph}>
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className={agencyPageStyle.whatWeDoSection}>
          <div
            className={agencyPageStyle.whatWeDoCard}
            data-aos="example-anim1"
            data-aos-once="true"
          >
            <div className={agencyPageStyle.carbonIconBlackContainerAbsolute}>
              <figure className={agencyPageStyle.lsdSize}>
                <img
                  className={agencyPageStyle.imageSource}
                  src={agencyPageData.carbonIconBlack.file.url}
                  alt="Carbón"
                />
              </figure>
            </div>
            <h4 className={agencyPageStyle.title}>
              {agencyPageData.whatWeDo.title}
            </h4>
            <h2 className={agencyPageStyle.subtitle}>
              {agencyPageData.whatWeDo.paragraph}
            </h2>
          </div>
        </section>
        <section className={agencyPageStyle.servicesSection}>
          <div
            className={agencyPageStyle.servicesCard}
            data-aos="example-anim1"
            data-aos-once="true"
          >
            <h4 className={agencyPageStyle.title}>
              {agencyPageData.services.listName}
            </h4>
            {agencyPageData.services.items.map(item => (
              <p className={agencyPageStyle.servicesList}>{item.text}</p>
            ))}
          </div>
        </section>
      </div>
      <section className={agencyPageStyle.viewWorkSection}>
        <div className={agencyPageStyle.viewWorkContainer}>
          <Link className={agencyPageStyle.linkContainer} to="/work">
            <h2 className={agencyPageStyle.title}>View Work -></h2>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AgencyPage
