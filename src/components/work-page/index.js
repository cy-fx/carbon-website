import React, { useEffect } from "react"
import workPageStyle from "./style.module.scss"
import FeaturedProject from "./featured-project"

import "../../reusable-styles/styles.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const WorkPage = ({ workPageData }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  })
  return (
    <div className={workPageStyle.backgroundContainer}>
      <div className={workPageStyle.componentContainer}>
        <section
          className={workPageStyle.greeting}
          data-aos="example-anim1"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className={workPageStyle.winWinContainer}>
            <p className={workPageStyle.title}>
              {workPageData.introduction.title}
            </p>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
          </div>
          <div className={workPageStyle.getInTouch}>
            <p className={workPageStyle.paragraph}>
              {workPageData.introduction.paragraph}
            </p>
            <span className="decoratorContainer">
              <span className="lineDecorator white"></span>
              <span className="lineDecorator white mobile"></span>
            </span>
          </div>
        </section>
        <FeaturedProject featuredProjectData={workPageData.projects} rightArrow={workPageData.rightArrow}/>
      </div>
    </div>
  )
}

export default WorkPage
