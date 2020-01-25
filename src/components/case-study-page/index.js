import React from "react"
import caseStudyPageStyle from "./style.module.scss"
import LeadIn from "./lead-in"

const CaseStudyPage = ({ caseStudyData }) => {
  console.log(caseStudyData)
  return (
    <div className={caseStudyPageStyle.backgroundContainer}>
      <div className={caseStudyPageStyle.componentContainer}>
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
              {caseStudyData.projectOverview.paragraph}
            </p>
          </div>
        </section>
        <section className={caseStudyPageStyle.showCase}>
          <figure className={caseStudyPageStyle.fullWidthImage}></figure>
        </section>
        <LeadIn leadInData={caseStudyData.leadIn} />
        <section className={caseStudyPageStyle.showCase}>
          <figure className={caseStudyPageStyle.fullWidthImage}></figure>
        </section>
        <section className={caseStudyPageStyle.showCaseHalf}>
          <figure className={caseStudyPageStyle.halfWidthImage}></figure>
          <figure className={caseStudyPageStyle.halfWidthImage}></figure>
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
