import React from "react"
import workPageStyle from "./style.module.scss"

import "../../../reusable-styles/styles.scss"

const featuredProject = ({ showCaseData, workPageData }) => {
  const rightArrow = workPageData.rightArrow
  return (
    <div className={workPageStyle.fullWidth}>
      {showCaseData.map((item, index) => (
        <a
          className={workPageStyle.featuredProjectContainer}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
          key={index}
          href={`/work${item.projectDisplay.link}`}
        >
          <div className={workPageStyle.featuredProjectDescription}>
            <div className={workPageStyle.projectNumber}>
              {`${workPageData.projectIndex} {00${index + 1}}`}
            </div>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
            </span>
            <div className={workPageStyle.projectInformation}>
              <h2 className={workPageStyle.projectTitle}>
                {item.projectDisplay.title}
              </h2>
              <h2 className={workPageStyle.projectsubtitle}>
                {item.projectDisplay.subtitle}
              </h2>
              <p className={workPageStyle.projectParagraph}>
                {item.projectDisplay.paragraph}
              </p>
              <div className={workPageStyle.buttonLinkContainer}>
                <div className={workPageStyle.greetingsLink}>
                  <figure className={workPageStyle.buttonLink}>
                    <img
                      alt="Carbon Agency"
                      className={workPageStyle.imageSource}
                      src={rightArrow.file.url}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className={`${workPageStyle.featuredProjectImage}`}>
            <figure className={workPageStyle.imageHolder}>
              <img
                className={workPageStyle.imageSource}
                src={item.projectDisplay.hoverImage.file.url}
                alt="Carbon Agency"
              />
            </figure>
          </div>
        </a>
      ))}
    </div>
  )
}

export default featuredProject
