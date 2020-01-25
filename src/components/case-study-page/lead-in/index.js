import React from "react"
import leadInStyle from "./style.module.scss"

const LeadIn = ({ leadInData }) => {
  
  return (
    <div className={leadInStyle.fullWidth}>
      <div className={leadInStyle.leadInContainer}>
        <div className={leadInStyle.leadInDescription}>
          
          <div className={leadInStyle.projectInformation}>
            <h2 className={leadInStyle.projectTitle}>
              {leadInData.title}
            </h2>
           
            <p className={leadInStyle.projectParagraph}>
              {leadInData.paragraph}
            </p>
          </div>
        </div>
        <div className={leadInStyle.leadInImage}>
          <figure className={leadInStyle.imageHolder}>
            {/* <img className={leadInStyle.imageSource} src={leadIn.featuredImage.file.url} /> */}
          </figure>
        </div>
      </div>
    </div>
  )
}

export default LeadIn
