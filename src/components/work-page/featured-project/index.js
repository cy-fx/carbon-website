import React from "react"
import workPageStyle from "./style.module.scss"
import { Link } from "gatsby"

import "../../../reusable-styles/styles.scss"

const featuredProject = ({ featuredProjectData, rightArrow }) => {
  return (
    <div className={workPageStyle.fullWidth}>
      {featuredProjectData.map((item, index) => (
        <div
          className={workPageStyle.featuredProjectContainer}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className={workPageStyle.featuredProjectDescription}>
            <div className={workPageStyle.projectNumber}>
              Project No. {`{00${index + 1}}`}
            </div>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
            </span>
            <div className={workPageStyle.projectInformation}>
              <h2 className={workPageStyle.projectTitle}>
                {item.slideDescription.title}
              </h2>
              <h2 className={workPageStyle.projectsubtitle}>
                {item.slideDescription.subtitle}
              </h2>
              <p className={workPageStyle.projectParagraph}>
                {item.slideDescription.paragraph}
              </p>
              <div className={workPageStyle.buttonLinkContainer}>
                <Link
                  className={workPageStyle.greetingsLink}
                  to={`/work${item.slideDescription.link}`}
                >
                  <figure className={workPageStyle.buttonLink}>
                    <img
                      className={workPageStyle.imageSource}
                      src={rightArrow.file.url}
                    />
                  </figure>
                </Link>
              </div>
            </div>
          </div>
          <div className={`${workPageStyle.featuredProjectImage}`}>
            <figure className={workPageStyle.imageHolder}>
              <img
                className={workPageStyle.imageSource}
                src={item.featuredImage.file.url}
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
