import caseStudyPageStyle from "./style.module.scss"
import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import "../../reusable-styles/styles.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const CaseStudyPage = ({ caseStudyData, newer }) => {
  const [playVideo, setPlayVideo] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  })

  const handleClick = e => {
    e.preventDefault()
    document.getElementById("close").style.display = "flex"
    document.getElementById("video").style.display = "flex"
    document.getElementById("video").src =
      caseStudyData.fullWidthImage1.description
    document.getElementById(
      "play"
    ).className = `${caseStudyPageStyle.fullWidthThumbnail} ${caseStudyPageStyle.fadeOut}`
    setPlayVideo(true)

    document.getElementById("videoBox").style.zIndex = "5"
  }

  const handleCloseButton = e => {
    e.preventDefault()
    document.getElementById("close").style.display = "none"
    document.getElementById("video").style.display = "none"
    document.getElementById("video").src = ""
    document.getElementById(
      "play"
    ).className = `${caseStudyPageStyle.fullWidthThumbnail} ${caseStudyPageStyle.fadeIn}`
    document.getElementById("videoBox").style.zIndex = "0"
    document.getElementById("play").style.zIndex = "5"

    setPlayVideo(true)
  }

  return (
    <div className={caseStudyPageStyle.backgroundContainer}>
      <div className={caseStudyPageStyle.componentContainer}>
        <span className={caseStudyPageStyle.absoluteImage}>
          <Img
            className={caseStudyPageStyle.imageSource}
            fluid={caseStudyData.jumbotron.heroImage.fluid}
            alt="Carbon Agency"
          />
        </span>

        <section
          className={caseStudyPageStyle.greeting}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className="displayRow desktop">
            <span className={`decoratorContainer col-33 `}>
              <span
                className={`lineDecorator white desktop ${caseStudyPageStyle.tablet}`}
              ></span>
            </span>

            <span className="decoratorContainer col-67">
              <span className="lineDecorator white margin-55 desktop"></span>
              <span className="lineDecorator white margin-22 desktop"></span>
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
          </div>
          <span className="decoratorContainer mobile">
            <span className="lineDecorator white"></span>
            <span className="lineDecorator white mobile"></span>
          </span>

          <div className={caseStudyPageStyle.winWinContainer}>
            <p className={caseStudyPageStyle.title}>
              {caseStudyData.jumbotron.clientName}
            </p>
          </div>
          <div className={caseStudyPageStyle.getInTouch}>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
            </span>
            <p className={caseStudyPageStyle.paragraph}>
              {caseStudyData.jumbotron.headline}
            </p>
            <span className="decoratorContainer desktop">
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
          </div>
        </section>
        <section
          className={caseStudyPageStyle.projectOverview}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className={caseStudyPageStyle.winWinContainer}>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
            <p className={caseStudyPageStyle.title}>
              {caseStudyData.services.listName}
            </p>
            {caseStudyData.services.items.map(item => (
              <div className={caseStudyPageStyle.services} key={item.id}>
                {item.text}
              </div>
            ))}
          </div>
          <div className={caseStudyPageStyle.getInTouch}>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
            <p className={caseStudyPageStyle.title}>
              {caseStudyData.projectOverview.title}
            </p>

            <p className={caseStudyPageStyle.paragraph}>
              {caseStudyData.projectOverview.paragraph.paragraph}
            </p>
          </div>
        </section>
        <section className={caseStudyPageStyle.showCase}>
          {caseStudyData.fullWidthImage1.description.includes("http") ? (
            <React.Fragment>
              <div id="play" className={caseStudyPageStyle.fullWidthThumbnail}>
                <div
                  onClick={handleClick}
                  className={`${caseStudyPageStyle.playBox}`}
                >
                  <img
                    className={`${caseStudyPageStyle.playIcon}`}
                    src={caseStudyData.playButton.file.url}
                    alt="Carbon Agency"
                  />
                </div>
                <Img
                  id="image"
                  className={caseStudyPageStyle.imageSource}
                  fluid={caseStudyData.fullWidthImage1.fluid}
                  alt="Carbon Agency"
                />
              </div>
              <figure
                id="videoBox"
                className={caseStudyPageStyle.fullWidthImage}
                data-aos="example-anim1"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                <div
                  onClick={handleCloseButton}
                  id="close"
                  className={`${caseStudyPageStyle.closeBox} ${caseStudyPageStyle.shadow}`}
                >
                  <span className={caseStudyPageStyle.closeIcon}>×</span>
                </div>

                <iframe
                  title="BYOG Deuce Brand | Carbón Agency"
                  id="video"
                  className={`${caseStudyPageStyle.video}`}
                  src=""
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </figure>
            </React.Fragment>
          ) : (
            <figure
              className={caseStudyPageStyle.fullWidthImage}
              data-aos="example-anim1"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <Img
                className={caseStudyPageStyle.imageSource}
                fluid={caseStudyData.fullWidthImage1.fluid}
                alt="Carbon Agency"
              />
            </figure>
          )}
        </section>
        <div
          className={caseStudyPageStyle.fullWidth}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className={caseStudyPageStyle.leadInContainer}>
            <div className={caseStudyPageStyle.leadInDescription}>
              <div className={caseStudyPageStyle.projectInformation}>
                <h2 className={caseStudyPageStyle.projectTitle}>
                  {caseStudyData.leadIn.title}
                </h2>
                <span className="decoratorContainer">
                  <span className="lineDecorator white"></span>
                </span>
                <p className={caseStudyPageStyle.projectParagraph}>
                  {caseStudyData.leadIn.paragraph}
                </p>
              </div>
            </div>
            <div className={caseStudyPageStyle.leadInImage}>
              <figure
                className={caseStudyPageStyle.imageHolder}
                data-aos="example-anim1"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                <Img
                  className={caseStudyPageStyle.imageSource}
                  fluid={caseStudyData.leadInImage.fluid}
                  alt="Carbon Agency"
                />
              </figure>
            </div>
          </div>
        </div>
        <section className={caseStudyPageStyle.showCase}>
          <figure
            className={caseStudyPageStyle.fullWidthImage}
            data-aos="example-anim1"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <Img
              className={caseStudyPageStyle.imageSource}
              fluid={caseStudyData.fullWidthImage2.fluid}
              alt="Carbon Agency"
            />
          </figure>
        </section>
        <section
          className={caseStudyPageStyle.showCaseHalf}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <figure className={`${caseStudyPageStyle.halfWidthImage}`}>
            <Img
              className={caseStudyPageStyle.imageSource}
              fluid={caseStudyData.halfWidthImageLeft.fluid}
              alt="Carbon Agency"
            />
          </figure>
          <figure className={`${caseStudyPageStyle.halfWidthImage}`}>
            <Img
              className={caseStudyPageStyle.imageSource}
              fluid={caseStudyData.halfWidthImageRight.fluid}
              alt="Carbon Agency"
            />
          </figure>
        </section>
        <section
          className={caseStudyPageStyle.testimonial}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className={caseStudyPageStyle.centerBlock}>
            <div className={caseStudyPageStyle.getInTouch}>
              <p className={caseStudyPageStyle.testimonialParagraph}>
                {caseStudyData.testimonial.testimonial}
              </p>
            </div>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
            </span>
            <div className={caseStudyPageStyle.winWinContainer}>
              <p className={caseStudyPageStyle.testimonialTitle}>
                {caseStudyData.testimonial.personName}
              </p>
              <p className={caseStudyPageStyle.testimonialSubtitle}>
                {caseStudyData.testimonial.position}
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className={caseStudyPageStyle.nextProjectBackground}>
        <section className={caseStudyPageStyle.nextProjectContainer}>
          <div className={caseStudyPageStyle.winWinContainer}>
            <p className={caseStudyPageStyle.title}>
              {newer.caseStudy.jumbotron.clientName}
            </p>
          </div>
          <div className={caseStudyPageStyle.getInTouch}>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
            </span>
            <div className={caseStudyPageStyle.textAndArrow}>
              <a
                className={caseStudyPageStyle.textAndArrowLink}
                href={`/work${newer.caseStudy.slug}`}
              >
                <p className={caseStudyPageStyle.paragraph}>Next Project</p>
                <div className={caseStudyPageStyle.nextArrow}>
                  <figure className={caseStudyPageStyle.imageHolder}>
                    <img
                      className={caseStudyPageStyle.imageSource}
                      src={caseStudyData.nextArrow.file.url}
                      alt="Carbon Agency"
                    />
                  </figure>
                </div>
              </a>
            </div>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
            </span>
          </div>
        </section>
        <span className={caseStudyPageStyle.nextProjectImage}>
          <Img
            className={caseStudyPageStyle.imageSource}
            fluid={newer.caseStudy.jumbotron.heroImage.fluid}
            alt="Carbon Agency"
          />
        </span>
      </div>
    </div>
  )
}

export default CaseStudyPage
