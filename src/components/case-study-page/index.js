import caseStudyPageStyle from "./style.module.scss"
import React, { useState, useEffect } from "react"

import "../../reusable-styles/styles.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const CaseStudyPage = ({ caseStudyData, newer }) => {
  const [playVideo, setPlayVideo] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
    })
    console.log(playVideo)
  })

  const handleClick = e => {
    e.preventDefault()
    document.getElementById("close").style.display = "flex"
    document.getElementById("video").style.display = "flex"
    document.getElementById("video").src =
      "https://player.vimeo.com/video/396790829?autoplay=1&loop=1&title=0&byline=0&portrait=0"
    document.getElementById(
      "play"
    ).className = `${caseStudyPageStyle.fullWidthThumbnail} ${caseStudyPageStyle.fadeOut}`
    setPlayVideo(true)
    
    document.getElementById("videoBox").style.zIndex = "5";

  }

  const handleCloseButton = e => {
    e.preventDefault()
    document.getElementById("close").style.display = "none"
    document.getElementById("video").style.display = "none"
    document.getElementById("video").src = ""
    document.getElementById(
      "play"
    ).className = `${caseStudyPageStyle.fullWidthThumbnail} ${caseStudyPageStyle.fadeIn}`
    document.getElementById("videoBox").style.zIndex = "0";
    document.getElementById("play").style.zIndex = "5";

    setPlayVideo(true)
    console.log(document.getElementById("image"))
  }

  return (
    <div className={caseStudyPageStyle.backgroundContainer}>
      <div className={caseStudyPageStyle.componentContainer}>
        <span className={caseStudyPageStyle.absoluteImage}>
          <img
            className={caseStudyPageStyle.imageSource}
            src={caseStudyData.jumbotron.heroImage.file.url}
            alt="Carbón"
          />
        </span>

        <section
          className={caseStudyPageStyle.greeting}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className="displayRow desktop">
            <span className="decoratorContainer col-33">
              <span className="lineDecorator white desktop"></span>
            </span>

            <span className="decoratorContainer col-67">
              <span className="lineDecorator white margin-55 desktop"></span>
              <span className="lineDecorator white margin-22 desktop"></span>
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
          </div>
          <span className="decoratorContainer">
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
          {caseStudyData.fullWidthImage1.description === "video" ? (
            <React.Fragment>
              <div id="play" className={caseStudyPageStyle.fullWidthThumbnail}>
                <div
                  onClick={handleClick}
                  className={`${caseStudyPageStyle.playBox} ${caseStudyPageStyle.shadowPlay}`}
                >
                  <div className={caseStudyPageStyle.playIcon}>▶</div>
                </div>
                <img
                  id="image"
                  className={caseStudyPageStyle.imageSource}
                  src={caseStudyData.fullWidthImage1.file.url}
                  alt="Carbón"
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
              <img
                className={caseStudyPageStyle.imageSource}
                src={caseStudyData.fullWidthImage1.file.url}
                alt="Carbón"
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
                <img
                  className={caseStudyPageStyle.imageSource}
                  src={caseStudyData.leadInImage.file.url}
                  alt="Carbón"
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
            <img
              className={caseStudyPageStyle.imageSource}
              src={caseStudyData.fullWidthImage2.file.url}
              alt="Carbón"
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
            <img
              className={caseStudyPageStyle.imageSource}
              src={caseStudyData.halfWidthImageLeft.file.url}
              alt="Carbón"
            />
          </figure>
          <figure className={`${caseStudyPageStyle.halfWidthImage}`}>
            <img
              className={caseStudyPageStyle.imageSource}
              src={caseStudyData.halfWidthImageRight.file.url}
              alt="Carbón"
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
            <p className={caseStudyPageStyle.title}>Client Name</p>
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
          <img
            className={caseStudyPageStyle.imageSource}
            src={newer.caseStudy.jumbotron.heroImage.file.url}
            alt="Carbón"
          />
        </span>
      </div>
    </div>
  )
}

export default CaseStudyPage
