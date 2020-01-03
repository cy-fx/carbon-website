import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const CaseStudyPage = ({ caseStudyData }) => {
  console.log(caseStudyData)

  return (
    <div>
      <section>
        <div>
          <h3>{caseStudyData.jumbotron.clientName}</h3>
          <p>{caseStudyData.jumbotron.headline}</p>
        </div>
        <Img fluid={caseStudyData.jumbotron.heroImage.fluid} />
      </section>
      <section>
        <div>
          <h3>{caseStudyData.services.listName}</h3>
          <ul>
            {caseStudyData.services.items.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{caseStudyData.projectOverview.title}</h3>
          <p>{caseStudyData.projectOverview.paragraph}</p>
        </div>
      </section>
      <section>
        <Img fluid={caseStudyData.fullWidthImage1.fluid} />
        <Img fluid={caseStudyData.fullWidthImage2.fluid} />
        <div>
          <div>
            <h3>{caseStudyData.projectOverview.title}</h3>
            <p>{caseStudyData.projectOverview.paragraph}</p>
          </div>
          <Img fluid={caseStudyData.leadInImage.fluid} />
        </div>
        <Img fluid={caseStudyData.halfWidthImageLeft.fluid} />
        <Img fluid={caseStudyData.halfWidthImageLeft.fluid} />
      </section>
      <section>
        <p>{caseStudyData.testimonial.testimonial}</p>
        <div>
          <span>{caseStudyData.testimonial.personName}</span>
          <span>{caseStudyData.testimonial.position}</span>
        </div>
      </section>
      <section>
        <p>Client Name</p>
        <Link to>Next Project</Link>
      </section>
    </div>
  )
}

export default CaseStudyPage
