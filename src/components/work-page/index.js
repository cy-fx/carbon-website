import React from "react"
import workPageStyle from "./style.module.scss"

const WorkPage = ({ workPageData }) => {
  console.log(workPageData)
  return (
    <div className={workPageStyle.componentContainer}></div>
  )
}

export default WorkPage
