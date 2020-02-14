import React from "react"
import Img from "gatsby-image"
import workPageStyle from "./style.module.scss"

const featuredProject = ({ featuredProjectData }) => {
  return (
    <div className={workPageStyle.fullWidth}>
      {featuredProjectData.map((item, index) => (
        <div className={workPageStyle.featuredProjectContainer}>
          <div className={workPageStyle.featuredProjectDescription}>
            <div className={workPageStyle.projectNumber}>
              Project No. {`{00${index + 1}}`}
            </div>
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
                <figure className={workPageStyle.buttonLink}>
                  <span className={workPageStyle.buttonImage}>></span>
                </figure>
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
