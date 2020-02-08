import React from "react"
import sliderStyle from "./style.module.scss"

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 0,
      firstSlide: 0,
      lastSlide: 0,
      hoverActive: false,
    }
  }

  componentDidMount() {
    const totalSlides = this.props.sliderData.featuredProjects.length - 1
    this.setState({ lastSlide: totalSlides })
  }

  componentDidUpdate() {}

  nextSlide() {
    let nextSlide = this.state.activeItem

    if (nextSlide === this.state.lastSlide) {
      this.setState({ activeItem: this.state.firstSlide })
    } else {
      ++nextSlide
      this.setState({ activeItem: nextSlide })
    }
  }

  previousSlide() {
    let previousSlide = this.state.activeItem

    if (previousSlide === this.state.firstSlide) {
      this.setState({ activeItem: this.state.lastSlide })
    } else {
      --previousSlide
      this.setState({ activeItem: previousSlide })
    }
  }

  goToThisSlide(index) {
    if (index !== this.state.activeItem) {
      this.setState({ activeItem: index })
    }
  }

  render() {
    console.log(this.props.sliderData)

    const sliderData = this.props.sliderData
    return (
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
              <div className={sliderStyle.projectNumber}>
                <div className={sliderStyle.featuredProjectTitle}>
                  Featured Project No. {`{00${index + 1}}`}
                </div>
                <div className={sliderStyle.arrows}>
                  <button
                    onClick={() => this.previousSlide()}
                    className={sliderStyle.arrow}
                  >
                    ←
                  </button>
                  <button
                    onClick={() => this.nextSlide()}
                    className={sliderStyle.arrow}
                  >
                    →
                  </button>
                </div>
              </div>

              <div className={sliderStyle.projectInformation}>
                <h2 className={sliderStyle.projectTitle}>
                  {item.slideDescription.title}
                </h2>

                <p className={sliderStyle.projectParagraph}>
                  {item.slideDescription.paragraph}
                </p>
                <span className={sliderStyle.projectButtonText}>
                  {item.slideDescription.buttonText}
                </span>
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
            <div
              className={`${sliderStyle.featuredProjectImage}`}
              onClick={() => this.nextSlide()}
            >
              <figure className={sliderStyle.imageHolder}>
                <img
                  className={sliderStyle.imageSource}
                  src={item.featuredImage.file.url}
                />
              </figure>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Slider
