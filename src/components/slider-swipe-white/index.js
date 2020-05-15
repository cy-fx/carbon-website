import React from "react"
import sliderSwipeWhiteStyle from "./style.module.scss"
import Img from "gatsby-image"
import "../../reusable-styles/styles.scss"
import "../../reusable-styles/slider.scss"


class SliderSwipeWhite extends React.Component {
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
    let animacion = document.getElementById("animationEventSliderSwipeWhite")

    const totalSlides =
      this.props.sliderSwipeWhiteData.featuredProjects.length - 1
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
      this.setState({
        activeItem: Math.floor(
          element.target.scrollLeft / element.target.clientWidth
        ),
      })
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
    const sliderSwipeWhiteData = this.props.sliderSwipeWhiteData
    const totalSlides =
      this.props.sliderSwipeWhiteData.featuredProjects.length 
    return (
      <div id="animationEventSliderSwipeWhite" className={sliderSwipeWhiteStyle.play}>
        <div className={sliderSwipeWhiteStyle.swipeHeader}>
          <p>Featured Project</p>
          <div>{`No. { 00${this.state.activeItem +
            1} / 00${totalSlides} }`}</div>
        </div>

        <div className={sliderSwipeWhiteStyle.sliderSwipeWhiteAbsoluteImages}>
          <figure className={sliderSwipeWhiteStyle.halftoneContainer}>
            <img
              className={sliderSwipeWhiteStyle.imageSource}
              src={sliderSwipeWhiteData.halftone.file.url}
              alt="Carbon Agency"
            />
          </figure>
          <figure className={sliderSwipeWhiteStyle.logoIconContainer}>
            <img
              className={sliderSwipeWhiteStyle.imageSource}
              src={sliderSwipeWhiteData.logoIcon.file.url}
              alt="Carbon Agency"
            />
          </figure>
        </div>
        <div
          id="circleButtons"
          className={sliderSwipeWhiteStyle.circleButtonsContainer}
        >
          <div className={sliderSwipeWhiteStyle.circleButtons}>
            {sliderSwipeWhiteData.featuredProjects.map((item, index) => (
              <div
                key={index}
                className={`${sliderSwipeWhiteStyle.circle} ${
                  this.state.activeItem === index
                    ? sliderSwipeWhiteStyle.circleActive
                    : ""
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div
          id="scrollin"
          className={`${sliderSwipeWhiteStyle.fullWidth} scroller disable-scrollbar`}
        >
          {sliderSwipeWhiteData.featuredProjects.map((item, index) => (
            <div
              id={`#slider-${index}`}
              key={index}
              className={`snap ${sliderSwipeWhiteStyle.featuredProjectContainer} `}
            >
              <div className={sliderSwipeWhiteStyle.featuredProjectDescription}>
                <div className={sliderSwipeWhiteStyle.descriptionHolder}>
                  <div className={sliderSwipeWhiteStyle.projectNumber}>
                    <div className={sliderSwipeWhiteStyle.featuredProjectTitle}>
                      Featured Project No. {`{00${index + 1}}`}
                    </div>
                    <div className={sliderSwipeWhiteStyle.arrows}>
                      <div
                        onClick={() => this.previousSlide(index)}
                        className={sliderSwipeWhiteStyle.arrow}
                      >
                        ←
                      </div>
                      <div
                        onClick={() => this.nextSlide()}
                        className={sliderSwipeWhiteStyle.arrow}
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
                        ? sliderSwipeWhiteStyle.projectInformation
                        : `${sliderSwipeWhiteStyle.projectInformation} ${sliderSwipeWhiteStyle.view}`
                    }
                  >
                    <h2 className={sliderSwipeWhiteStyle.projectTitle}>
                      {item.title}
                    </h2>
                    <span className="decoratorContainer desktop">
                      <span className="lineDecorator white"></span>
                      <span className="lineDecorator white mobile"></span>
                    </span>
                    <p className={sliderSwipeWhiteStyle.projectParagraph}>
                      {item.paragraph}
                    </p>
                    <a
                      className={sliderSwipeWhiteStyle.greetingsLink}
                      href={`/work${item.link}`}
                    >
                      <span className={sliderSwipeWhiteStyle.link}>
                        {item.buttonText}
                      </span>
                      <span
                        className={sliderSwipeWhiteStyle.linkDecoration}
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
              <a
                className={`${sliderSwipeWhiteStyle.featuredProjectImage}`}
                href={`/work${item.link}`}
              >
                <figure className={sliderSwipeWhiteStyle.imageHolder}>
                  <Img
                    className={
                      !this.state.animationEnd
                        ? sliderSwipeWhiteStyle.imageSource
                        : `${sliderSwipeWhiteStyle.imageSource} ${sliderSwipeWhiteStyle.grow}`
                    }
                    fluid={item.featuredImage.fluid}
                    alt="Carbón"
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

export default SliderSwipeWhite
