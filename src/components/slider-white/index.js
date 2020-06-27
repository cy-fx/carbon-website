import React from "react"
import sliderWhiteStyle from "./style.module.scss"
import Img from "gatsby-image"
import "../../reusable-styles/styles.scss"
import "../../reusable-styles/slider.scss"


class SliderWhite extends React.Component {
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
    let animacion = document.getElementById("animationEventSliderWhite")

    const totalSlides = this.props.sliderWhiteData.featuredProjects.length - 1
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

  componentDidUpdate() {}

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
    const sliderWhiteData = this.props.sliderWhiteData
    return (
      <div id="animationEventSliderWhite" className={sliderWhiteStyle.play}>
        <div className={sliderWhiteStyle.sliderWhiteAbsoluteImages}>
          <figure className={sliderWhiteStyle.halftoneContainer}>
            <img
              className={sliderWhiteStyle.imageSource}
              src={sliderWhiteData.halftone.file.url}
              alt="Carbon Agency"
            />
          </figure>
          <figure className={sliderWhiteStyle.logoIconContainer}>
            <img
              className={sliderWhiteStyle.imageSource}
              src={sliderWhiteData.logoIcon.file.url}
              alt="Carbon Agency"
            />
          </figure>
        </div>

        <div className={sliderWhiteStyle.fullWidth}>
          {sliderWhiteData.featuredProjects.map((item, index) => (
            <div key={index}
              className={`${sliderWhiteStyle.featuredProjectContainer} ${
                this.state.activeItem === index
                  ? sliderWhiteStyle.show
                  : sliderWhiteStyle.dontShow
              }`}
            >
             
              <div className={sliderWhiteStyle.featuredProjectDescription}>
                <div className={sliderWhiteStyle.descriptionHolder}>
                  <div className={sliderWhiteStyle.projectNumber}>
                    <div className={sliderWhiteStyle.featuredProjectTitle}>
                      Featured Project No. {`{00${index + 1}}`}
                    </div>
                    <div className={sliderWhiteStyle.arrows}>
                      <div
                        onClick={() => this.previousSlide(index)}
                        className={sliderWhiteStyle.arrow}
                      >
                        <div className={sliderWhiteStyle.leftArrow}>
                          <figure className={sliderWhiteStyle.imageHolder}>
                            <img
                              className={sliderWhiteStyle.imageSource}
                              src={sliderWhiteData.leftArrow.file.url}
                              alt="Carbon Agency"
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        onClick={() => this.nextSlide()}
                        className={sliderWhiteStyle.arrow}
                      >
                        <div className={sliderWhiteStyle.rightArrow}>
                          <figure className={sliderWhiteStyle.imageHolder}>
                            <img
                              className={sliderWhiteStyle.imageSource}
                              src={sliderWhiteData.rightArrow.file.url}
                              alt="Carbon Agency"
                            />
                          </figure>
                        </div>
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
                        ? sliderWhiteStyle.projectInformation
                        : `${sliderWhiteStyle.projectInformation} ${sliderWhiteStyle.view}`
                    }
                  >
                    <h2 className={sliderWhiteStyle.projectTitle}>
                      {item.title}
                    </h2>
                    <span className={`decoratorContainer desktop ${sliderWhiteStyle.tablet}`}>
                      <span className="lineDecorator white"></span>
                      <span className="lineDecorator white mobile"></span>
                    </span>
                    <p className={sliderWhiteStyle.projectParagraph}>
                      {item.paragraph}
                    </p>
                    <a
                      className={sliderWhiteStyle.greetingsLink}
                      href={`/work${item.link}`}
                    >
                      <span className={sliderWhiteStyle.link}>
                        {item.buttonText}
                      </span>
                      <span className={sliderWhiteStyle.linkDecoration}></span>
                    </a>
                  </div>
                  <div className={sliderWhiteStyle.circleButtonsContainer}>
                    <div className={sliderWhiteStyle.circleButtons}>
                      {sliderWhiteData.featuredProjects.map((item, index) => (
                        <span
                        key={index}
                          onClick={() => this.goToThisSlide(index)}
                          className={`${sliderWhiteStyle.circle} ${
                            this.state.activeItem === index
                              ? sliderWhiteStyle.circleActive
                              : ""
                          }`}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <a className={`${sliderWhiteStyle.featuredProjectImage}`} href={`/work${item.link}`}>
                <figure className={sliderWhiteStyle.hoverHolder}>
                  <Img
                    className={sliderWhiteStyle.showHover}
                    fluid={item.hoverImage.fluid}
                    alt="Carbon Agency"
                  />
                </figure>

                <figure className={sliderWhiteStyle.imageHolder}>
                  <Img
                    className={
                      !this.state.animationEnd
                        ? sliderWhiteStyle.imageSource
                        : `${sliderWhiteStyle.imageSource} ${sliderWhiteStyle.grow}`
                    }
                    fluid={item.featuredImage.fluid}
                    alt="Carbon Agency"
                  />
                </figure>

                <figure className={sliderWhiteStyle.previousImage}>
                  <Img
                    className={`${sliderWhiteStyle.imageSource} ${sliderWhiteStyle.grow}`}
                    fluid={
                      this.state.backButton
                        ? index === sliderWhiteData.featuredProjects.length - 1
                          ? sliderWhiteData.featuredProjects[0].featuredImage.fluid
                          : sliderWhiteData.featuredProjects[index + 1].featuredImage
                              .file.url
                        : index === 0 
                        ? sliderWhiteData.featuredProjects[
                            sliderWhiteData.featuredProjects.length - 1
                          ].featuredImage.fluid
                        : sliderWhiteData.featuredProjects[index - 1].featuredImage
                            .fluid
                    }
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

export default SliderWhite
