import React from "react"
import caseStudyPageStyle from "./style.module.scss"
// import LeadIn from "./lead-in"

const CaseStudyPage = ({ caseStudyData }) => {
  return (
    <div className={caseStudyPageStyle.backgroundContainer}>
      <div className={caseStudyPageStyle.componentContainer}>
        <span className={caseStudyPageStyle.absoluteImage}>
          <img
            className={caseStudyPageStyle.imageSource}
            src={caseStudyData.jumbotron.heroImage.file.url}
          />
        </span>

        <section className={caseStudyPageStyle.greeting}>
          <div className={caseStudyPageStyle.winWinContainer}>
            <p className={caseStudyPageStyle.title}>
              {caseStudyData.jumbotron.clientName}
            </p>
          </div>
          <div className={caseStudyPageStyle.getInTouch}>
            <p className={caseStudyPageStyle.paragraph}>
              {caseStudyData.jumbotron.headline}
            </p>
          </div>
        </section>
        <section className={caseStudyPageStyle.projectOverview}>
          <div className={caseStudyPageStyle.winWinContainer}>
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
            <p className={caseStudyPageStyle.title}>
              {caseStudyData.projectOverview.title}
            </p>
            <p className={caseStudyPageStyle.paragraph}>
              {caseStudyData.projectOverview.paragraph.paragraph}
            </p>
          </div>
        </section>
        <section className={caseStudyPageStyle.showCase}>
          <figure className={caseStudyPageStyle.fullWidthImage}>
          <img className={caseStudyPageStyle.imageSource} src={caseStudyData.fullWidthImage1.file.url} />
          </figure>
        </section>
        <div className={caseStudyPageStyle.fullWidth}>
      <div className={caseStudyPageStyle.leadInContainer}>
        <div className={caseStudyPageStyle.leadInDescription}>
          
          <div className={caseStudyPageStyle.projectInformation}>
            <h2 className={caseStudyPageStyle.projectTitle}>
              {caseStudyData.leadIn.title}
            </h2>
           
            <p className={caseStudyPageStyle.projectParagraph}>
              {caseStudyData.leadIn.paragraph}
            </p>
          </div>
        </div>
        <div className={caseStudyPageStyle.leadInImage}>
          <figure className={caseStudyPageStyle.imageHolder}>
          <img className={caseStudyPageStyle.imageSource} src={caseStudyData.leadInImage.file.url} />
          </figure>
        </div>
      </div>
    </div>
        <section className={caseStudyPageStyle.showCase}>
          <figure className={caseStudyPageStyle.fullWidthImage}>
          <img className={caseStudyPageStyle.imageSource} src={caseStudyData.fullWidthImage2.file.url} />
          </figure>
        </section>
        <section className={caseStudyPageStyle.showCaseHalf}>
          <figure className={`${caseStudyPageStyle.halfWidthImage}`}>
            <img className={caseStudyPageStyle.imageSource} src={caseStudyData.halfWidthImageLeft.file.url} />
          </figure>
          <figure className={`${caseStudyPageStyle.halfWidthImage}`}>
            <img className={caseStudyPageStyle.imageSource} src={caseStudyData.halfWidthImageRight.file.url} />
          </figure>
        </section>
        <section className={caseStudyPageStyle.testimonial}>
          <div className={caseStudyPageStyle.centerBlock}>
            <div className={caseStudyPageStyle.getInTouch}>
              <p className={caseStudyPageStyle.testimonialParagraph}>
                {caseStudyData.testimonial.testimonial}
              </p>
            </div>
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
            <p className={caseStudyPageStyle.paragraph}>Next Project ➝</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CaseStudyPage
