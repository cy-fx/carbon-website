import React, { useEffect } from "react"
import Img from "gatsby-image"
import agencyPageStyle from "./style.module.scss"
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
          data-aos-anchor-placement="top"
        >
          <div className={agencyPageStyle.lsdContainerAbsolute}>
            <figure className={agencyPageStyle.imageHolder}>
              <Img
                className={agencyPageStyle.imageSource}
                fluid={agencyPageData.backgroundImage.fluid}
                alt="Carbon Agency"
              />
            </figure>
          </div>

          <div className={agencyPageStyle.whoWeAreContainer}>
            <div className={agencyPageStyle.whoWeAreCard}>
              <span className="decoratorContainer">
                <span className="lineDecorator black"></span>
                <span className="lineDecorator black mobile"></span>
              </span>
              <h4 className={agencyPageStyle.title}>
                {agencyPageData.whoWeAre.title}
              </h4>
              <h2 className={agencyPageStyle.subtitle}>
                {agencyPageData.whoWeAre.subtitle1}
              </h2>
              <h2
                className={`${agencyPageStyle.subtitle} ${agencyPageStyle.blue}`}
              >
                {agencyPageData.whoWeAre.subtitle2}
              </h2>
              <span className="decoratorContainer desktop">
                <span className="lineDecorator black"></span>
                <span className="lineDecorator black mobile"></span>
              </span>

              <p className={agencyPageStyle.paragraph1}>
                {agencyPageData.whoWeAre.paragraph1}
              </p>
              <div className={agencyPageStyle.paragraph2}>
                <span>{agencyPageData.whoWeAre.paragraph2}</span>
                <span className={agencyPageStyle.winWinHolder}>
                  <figure className={agencyPageStyle.imageHolder}>
                    <img
                      className={agencyPageStyle.imageSource}
                      src={agencyPageData.whoWeAre.image2.file.url}
                      alt="Carbon Agency"
                    />
                    <img
                      className={`${agencyPageStyle.imageSourrce} ${agencyPageStyle.circleAbsolute}`}
                      src={agencyPageData.whoWeAre.image1.file.url}
                      alt="Carbon Agency"
                    />
                  </figure>
                </span>
                <span className={agencyPageStyle.paragraph}>
                  {agencyPageData.whoWeAre.paragraph3}
                </span>
              </div>

              <p className={agencyPageStyle.paragraphWinWin}>
                {agencyPageData.whoWeAre.buttonText}
              </p>
              <span className="decoratorContainer">
                <span className="lineDecorator black margin-50"></span>
                <span className="lineDecorator black "></span>
              </span>
              <span className="decoratorContainer desktop space-y-140">
                <span className="lineDecorator black margin-50"></span>
                <span className="lineDecorator black "></span>
              </span>
            </div>
          </div>

          <div className={agencyPageStyle.winWinContainerAbsolute}>
            <figure className={agencyPageStyle.winWinSize}>
              <img
                className={agencyPageStyle.imageSource}
                src={agencyPageData.winWinGif.file.url}
                alt="Carbon Agency"
              />
            </figure>
          </div>
        </section>
        <section
          className={agencyPageStyle.whatWeBelieveInSection}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className={agencyPageStyle.whatWeBelieveInCard}>
            <span className="decoratorContainer">
              <span className="lineDecorator black"></span>
              <span className="lineDecorator black mobile"></span>
            </span>
            <h4 className={agencyPageStyle.title}>
              {agencyPageData.whatWeBelieveIn.listName}
            </h4>
            {agencyPageData.whatWeBelieveIn.items.map((item, index) => (
              <p key={index} className={agencyPageStyle.word}>
                {item.text}
              </p>
            ))}
          </div>
          <div className={agencyPageStyle.enLoQueCreemosCard}>
            <span className="decoratorContainer">
              <span className="lineDecorator black"></span>
              <span className="lineDecorator black mobile"></span>
            </span>
            <h4 className={agencyPageStyle.title}>
              {agencyPageData.enLoQueCreemos.listName}
            </h4>
            {agencyPageData.enLoQueCreemos.items.map((item, index) => (
              <div key={index} className={agencyPageStyle.enLoQueCreemosItem}>
                <span
                  className={
                    index === 0
                      ? "decoratorContainer desktop"
                      : "decoratorContainer"
                  }
                >
                  <span className="lineDecorator black"></span>
                  <span className="lineDecorator black mobile"></span>
                </span>

                <div className={agencyPageStyle.description}>
                  <h5 className={agencyPageStyle.listTitle}>{item.title}</h5>
                  <p className={agencyPageStyle.listParagraph}>
                    {item.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={agencyPageStyle.whatWeDoSection}>
          <div
            className={agencyPageStyle.whatWeDoCard}
            data-aos="example-anim1"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <div className={agencyPageStyle.carbonIconBlackContainerAbsolute}>
              <figure className={agencyPageStyle.lsdSize}>
                <img
                  className={agencyPageStyle.imageSource}
                  src={agencyPageData.carbonIconBlack.file.url}
                  alt="Carbon Agency"
                />
              </figure>
            </div>
            <span className="decoratorContainer">
              <span className="lineDecorator black"></span>
              <span className="lineDecorator black mobile"></span>
            </span>
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
            data-aos-anchor-placement="top"
          >
            <span className="decoratorContainer">
              <span className="lineDecorator black"></span>
              <span className="lineDecorator black mobile"></span>
            </span>
            <h4 className={agencyPageStyle.title}>
              {agencyPageData.services.listName}
            </h4>
            <div className={agencyPageStyle.servicesLists}>
              {agencyPageData.services.items.map((list, index) => (
                <div key={index} className={agencyPageStyle.servicesColumn}>
                  {list.items.map(item => (
                    <p key={item.text} className={agencyPageStyle.servicesList}>
                      {item.text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className={agencyPageStyle.viewWorkSection}>
        <div className={agencyPageStyle.viewWorkContainer}>
          <a className={agencyPageStyle.linkContainer} href="/work">
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
            </span>
            <div className={agencyPageStyle.textAndArrow}>
              <h2 className={agencyPageStyle.title}>
                {agencyPageData.viewWork}
              </h2>
              <div className={agencyPageStyle.nextArrow}>
                <figure className={agencyPageStyle.imageHolder}>
                  <img
                    className={agencyPageStyle.imageSource}
                    src={agencyPageData.nextArrow.file.url}
                    alt="Carbon Agency"
                  />
                </figure>
              </div>
            </div>

            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
            </span>
          </a>
        </div>
        <div className={agencyPageStyle.viewWorkBackground}>
          <figure className={agencyPageStyle.imageHolder}>
            <Img
              className={agencyPageStyle.imageSource}
              fluid={agencyPageData.viewWorkImage.fluid}
              alt="Carbon Agency"
            />
          </figure>
        </div>
      </section>
    </div>
  )
}

export default AgencyPage
