import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Slider = ({ sliderData }) => {
  const item = sliderData.featuredProjects[0]
  return (
    <div>
      <section>
        <div>{sliderData.title}</div>
        <div>
          <h2>{item.slideDescription.title}</h2>
          <p>{item.slideDescription.title}</p>
          <a href={item.slideDescription.link}>
            <span>{item.slideDescription.buttonText}</span>
          </a>
        </div>
      </section>
      <section>
        <div>
          <figure>
            <Img fluid={item.featuredImage.fluid} />
          </figure>
        </div>
        <div>
          <figure>
            <Img fluid={item.hoverImage.fluid} />
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Slider
