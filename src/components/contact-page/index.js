import React from "react"
import contactPageStyle from "./style.module.scss"

const ContactPage = ({ contactPageData }) => {
  console.log(contactPageData)
  return (
    <div className={contactPageStyle.componentContainer}></div>
  )
}

export default ContactPage
