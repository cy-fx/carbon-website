import React from "react"
import sliderSwipeStyle from "./style.module.scss"
import { Link } from "gatsby"

import "../../reusable-styles/styles.scss"

class SliderSwipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollWidth: 0,
      activeItem: 0,
      firstSlide: 0,
      lastSlide: 0,
      hoverActive: false,
      animationEnd: true,
      backButton: false,
    }
  }

  componentDidMount() {
    let animacion = document.getElementById("animationEventSliderSwipe")

    const totalSlides = this.props.sliderSwipeData.featuredProjects.length - 1
    this.setState({ lastSlide: totalSlides })

    animacion.addEventListener("animationstart", this.starts, true)
    animacion.addEventListener("animationend", this.ends, true)

    document
      .querySelector("#scrollin")
      .addEventListener("scroll", this.scrollin)
  }

  scrollin = element => {
    
    if (this.state.scrollWidth !== element.target.scrollWidth) {
      this.setState({ scrollWidth: element.target.scrollWidth })
    }

    if (element.target.scrollLeft) {
      this.setState({ activeItem: Math.floor(element.target.scrollLeft /element.target.clientWidth) })
    }
  }

  starts = e => {
    this.setState({ animationEnd: false })
  }

  ends = e => {
    this.setState({ animationEnd: true })
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
    const sliderSwipeData = this.props.sliderSwipeData
    return (
      <div id="animationEventSliderSwipe" className={sliderSwipeStyle.play}>
        <div className={sliderSwipeStyle.sliderSwipeAbsoluteImages}>
          <figure className={sliderSwipeStyle.halftoneContainer}>
            <img
              className={sliderSwipeStyle.imageSource}
              src={sliderSwipeData.halftone.file.url}
              alt="Carbon Agency"
            />
          </figure>
          <figure className={sliderSwipeStyle.logoIconContainer}>
            <img
              className={sliderSwipeStyle.imageSource}
              src={sliderSwipeData.logoIcon.file.url}
              alt="Carbon Agency"
            />
          </figure>
        </div>
        <div
          id="circleButtons"
          className={sliderSwipeStyle.circleButtonsContainer}
        >
          <div className={sliderSwipeStyle.circleButtons}>
            {sliderSwipeData.featuredProjects.map((item, index) => (
              <div
                key={item.id}
                className={`${sliderSwipeStyle.circle} ${
                  this.state.activeItem === index
                    ? sliderSwipeStyle.circleActive
                    : ""
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div
          id="scrollin"
          className={`${sliderSwipeStyle.fullWidth} scroller disable-scrollbar`}
        >
          {sliderSwipeData.featuredProjects.map((item, index) => (
            <div
              id={`#slider-${index}`}
              key={item.id}
              className={`snap ${sliderSwipeStyle.featuredProjectContainer} `}
            >
              <div className={sliderSwipeStyle.featuredProjectDescription}>
                <div className={sliderSwipeStyle.descriptionHolder}>
                  <div className={sliderSwipeStyle.projectNumber}>
                    <div className={sliderSwipeStyle.featuredProjectTitle}>
                      Featured Project No. {`{00${index + 1}}`}
                    </div>
                    <div className={sliderSwipeStyle.arrows}>
                      <div
                        onClick={() => this.previousSlide(index)}
                        className={sliderSwipeStyle.arrow}
                      >
                        ←
                      </div>
                      <div
                        onClick={() => this.nextSlide()}
                        className={sliderSwipeStyle.arrow}
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
                        ? sliderSwipeStyle.projectInformation
                        : `${sliderSwipeStyle.projectInformation} ${sliderSwipeStyle.view}`
                    }
                  >
                    <h2 className={sliderSwipeStyle.projectTitle}>
                      {item.title}
                    </h2>
                    <span className="decoratorContainer desktop">
                      <span className="lineDecorator white"></span>
                      <span className="lineDecorator white mobile"></span>
                    </span>
                    <p className={sliderSwipeStyle.projectParagraph}>
                      {item.paragraph}
                    </p>
                    <a
                      className={sliderSwipeStyle.greetingsLink}
                      href={`/work${item.link}`}
                    >
                      <span className={sliderSwipeStyle.link}>
                        {item.buttonText}
                      </span>
                      <span className={sliderSwipeStyle.linkDecoration}></span>
                    </a>
                  </div>
                </div>
              </div>
              <a
                className={`${sliderSwipeStyle.featuredProjectImage}`}
                href={`/work${item.link}`}
              >
                <figure className={sliderSwipeStyle.imageHolder}>
                  <img
                    className={
                      !this.state.animationEnd
                        ? sliderSwipeStyle.imageSource
                        : `${sliderSwipeStyle.imageSource} ${sliderSwipeStyle.grow}`
                    }
                    src={item.featuredImage.file.url}
                    alt="Carbon Agency"
                  />
                </figure>
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SliderSwipe
