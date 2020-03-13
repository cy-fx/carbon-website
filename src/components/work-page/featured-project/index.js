import React from "react"
import workPageStyle from "./style.module.scss"

import "../../../reusable-styles/styles.scss"

const featuredProject = ({ showCaseData, workPageData }) => {
  const rightArrow = workPageData.rightArrow
  return (
    <div className={workPageStyle.fullWidth}>
      {showCaseData.map((item, index) => (
        <div
          className={workPageStyle.featuredProjectContainer}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
          key={`${item.projectDisplay.title}${index}`}
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
                <a
                  className={workPageStyle.greetingsLink}
                  href={`/work${item.projectDisplay.link}`}
                >
                  <figure className={workPageStyle.buttonLink}>
                    <img
                      className={workPageStyle.imageSource}
                      src={rightArrow.file.url}
                    />
                  </figure>
                </a>
              </div>
            </div>
          </div>
          <div className={`${workPageStyle.featuredProjectImage}`}>
            <figure className={workPageStyle.imageHolder}>
              <img
                className={workPageStyle.imageSource}
                src={item.projectDisplay.featuredImage.file.url}
                alt="Carbón"
              />
            </figure>
          </div>
        </div>
      ))}
    </div>
  )
}

export default featuredProject
