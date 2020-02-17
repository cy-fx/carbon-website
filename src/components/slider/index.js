import React from "react"
import sliderStyle from "./style.module.scss"
import { Link } from "gatsby"

import "../../reusable-styles/styles.scss"

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 0,
      firstSlide: 0,
      lastSlide: 0,
      hoverActive: false,
      animationEnd: true,
      backButton: false,
    }
  }

  componentDidMount() {
    let animacion = document.getElementById("animationEvent")

    const totalSlides = this.props.sliderData.featuredProjects.length - 1
    this.setState({ lastSlide: totalSlides })

    animacion.addEventListener("animationstart", this.starts, true)
    animacion.addEventListener("animationend", this.ends, true)
  }

  starts = e => {
    this.setState({ animationEnd: false })
  }

  ends = e => {
    this.setState({ animationEnd: true })
  }

  componentDidUpdate() {
  }

  nextSlide() {
    this.setState({ backButton: false })

    if (this.state.animationEnd) {
      let nextSlide = this.state.activeItem

      if (nextSlide === this.state.lastSlide) {
        this.setState({ activeItem: this.state.firstSlide })
      } else {
        ++nextSlide
        this.setState({ activeItem: nextSlide })
      }
    }
  }

  previousSlide() {
    this.setState({ backButton: true })

    if (this.state.animationEnd) {
      let previousSlide = this.state.activeItem

      if (previousSlide === this.state.firstSlide) {
        this.setState({ activeItem: this.state.lastSlide })
      } else {
        --previousSlide
        this.setState({ activeItem: previousSlide })
      }
    }
  }

  goToThisSlide(index) {
    if (index !== this.state.activeItem) {
      this.setState({ activeItem: index })
    }
  }

  render() {
    const sliderData = this.props.sliderData
    return (
      <div id="animationEvent" className={sliderStyle.play}>
        <div className={sliderStyle.sliderAbsoluteImages}>
          <figure className={sliderStyle.halftoneContainer}>
            <img
              className={sliderStyle.imageSource}
              src={sliderData.halftone.file.url}
            />
          </figure>
          <figure className={sliderStyle.logoIconContainer}>
            <img
              className={sliderStyle.imageSource}
              src={sliderData.logoIcon.file.url}
            />
          </figure>
        </div>

        <div className={sliderStyle.fullWidth}>
          {sliderData.featuredProjects.map((item, index) => (
            <div
              className={`${sliderStyle.featuredProjectContainer} ${
                this.state.activeItem === index
                  ? sliderStyle.show
                  : sliderStyle.dontShow
              }`}
            >
              <div className={sliderStyle.featuredProjectDescription}>
                <div className={sliderStyle.descriptionHolder}>
                  <div className={sliderStyle.projectNumber}>
                    <div className={sliderStyle.featuredProjectTitle}>
                      Featured Project No. {`{00${index + 1}}`}
                    </div>
                    <div className={sliderStyle.arrows}>
                      <div
                        onClick={() => this.previousSlide(index)}
                        className={sliderStyle.arrow}
                      >
                        ←
                      </div>
                      <div
                        onClick={() => this.nextSlide()}
                        className={sliderStyle.arrow}
                      >
                        →
                      </div>
                    </div>
                  </div>
                  <span className="decoratorContainer desktop">
                    <span className="lineDecorator white"></span>
                    <span className="lineDecorator white mobile"></span>
                  </span>

                  <div
                    className={
                      this.state.animationEnd
                        ? sliderStyle.projectInformation
                        : `${sliderStyle.projectInformation} ${sliderStyle.view}`
                    }
                  >
                    <h2 className={sliderStyle.projectTitle}>
                      {item.slideDescription.title}
                    </h2>
                    <span className="decoratorContainer desktop">
                      <span className="lineDecorator white"></span>
                      <span className="lineDecorator white mobile"></span>
                    </span>
                    <p className={sliderStyle.projectParagraph}>
                      {item.slideDescription.paragraph}
                    </p>
                    <Link
                      className={sliderStyle.greetingsLink}
                      to="/case-study"
                    >
                      <span className={sliderStyle.link}>
                        {item.slideDescription.buttonText}
                      </span>
                      <span className={sliderStyle.linkDecoration}></span>
                    </Link>
                  </div>
                  <div className={sliderStyle.circleButtonsContainer}>
                    <div className={sliderStyle.circleButtons}>
                      {sliderData.featuredProjects.map((item, index) => (
                        <span
                          onClick={() => this.goToThisSlide(index)}
                          className={`${sliderStyle.circle} ${
                            this.state.activeItem === index
                              ? sliderStyle.circleActive
                              : ""
                          }`}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${sliderStyle.featuredProjectImage}`}
                onClick={() => this.nextSlide(index)}
              >
                <figure className={sliderStyle.imageHolder}>
                  <img
                    className={
                      !this.state.animationEnd
                        ? sliderStyle.imageSource
                        : `${sliderStyle.imageSource} ${sliderStyle.grow}`
                    }
                    src={item.featuredImage.file.url}
                    alt="Carbón"
                  />
                </figure>

                <figure className={sliderStyle.previousImage}>
                  <img
                    className={`${sliderStyle.imageSource} ${sliderStyle.grow}`}
                    src={
                      this.state.backButton
                        ? index === sliderData.featuredProjects.length - 1
                          ? sliderData.featuredProjects[0].featuredImage.file
                              .url
                          : sliderData.featuredProjects[index + 1].featuredImage
                              .file.url
                        : index === 0 // NEXT
                        ? sliderData.featuredProjects[
                            sliderData.featuredProjects.length - 1
                          ].featuredImage.file.url
                        : sliderData.featuredProjects[index - 1].featuredImage
                            .file.url
                    }
                    alt="Carbón"
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Slider
