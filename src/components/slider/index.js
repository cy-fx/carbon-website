import React from "react"
import Img from "gatsby-image"
import sliderStyle from "./style.module.scss"

const Slider = ({ sliderData }) => {
  return (
    <div className={sliderStyle.fullWidth}>
      {sliderData.featuredProjects.map((item, index) => (
        <div className={sliderStyle.featuredProjectContainer}>
          <div className={sliderStyle.featuredProjectDescription}>
            <div className={sliderStyle.projectNumber}>
              Featured Project No. {`{00${index + 1}}`}
            </div>
            <div className={sliderStyle.projectInformation}>
              <h2 className={sliderStyle.projectTitle}>
                {item.slideDescription.title}
              </h2>
              
              <p className={sliderStyle.projectParagraph}>
                {item.slideDescription.paragraph}
              </p>
              <span className={sliderStyle.projectButtonText}>
                {item.slideDescription.buttonText}
              </span>
              {/* <span className={sliderStyle.linkDecoration}></span> */}
            </div>
            <div><span>• • • •</span></div>
          </div>
          <div className={sliderStyle.featuredProjectImage}>
            <figure className={sliderStyle.imageHolder}>
              {/* <img className={sliderStyle.imageSource} src={item.featuredImage.file.url} /> */}
            </figure>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slider
