import React from "react"
import workPageStyle from "./style.module.scss"
import FeaturedProject from "./featured-project"

const WorkPage = ({ workPageData }) => {
  return (
    <div className={workPageStyle.backgroundContainer}>
      <div className={workPageStyle.componentContainer}>
        <section className={workPageStyle.greeting} data-aos="example-anim1" data-aos-once="true">
          <div className={workPageStyle.winWinContainer}>
            <p className={workPageStyle.title}>{workPageData.introduction.title}</p>
          </div>
          <div className={workPageStyle.getInTouch}>
            <p className={workPageStyle.paragraph}>{workPageData.introduction.paragraph}</p>
          </div>
        </section>
        <FeaturedProject featuredProjectData={workPageData.projects}/>
      </div>
    </div>
  )
}

export default WorkPage
