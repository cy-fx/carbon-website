import React from "react"
import { Link } from "gatsby"
import homePageStyle from "./style.module.scss"
import Img from "gatsby-image"

const HomePage = ({ homePageData }) => {
  console.log(homePageData)
  return (
    <div className={homePageStyle.componentContainer}>
      <section className={homePageStyle.heroContainer}>
        <figure className={homePageStyle.imageHolder}>
          <img
            className={homePageStyle.imageSource}
            src={homePageData.heroImage.file.url}
          />
        </figure>
      </section>

      <section className={homePageStyle.greetingsContainer}>
        <span className={homePageStyle.greetingsLineDecorationContainer}>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
        </span>
        {homePageData.greetings.map(item => (
          <div className={homePageStyle.greetingsCard} key={item.id}>
            <div className={homePageStyle.greetingsContent}>
              <p className={homePageStyle.greetingsParagraph}>
                {item.paragraph}
              </p>
              <Link className={homePageStyle.greetingsLink} to={item.link}>
                <span>
                  {item.buttonText}
                  <span className={homePageStyle.linkDecoration}></span>
                </span>
              </Link>
            </div>
          </div>
        ))}
        <div className={homePageStyle.greetingsCard}>
          <nav className={homePageStyle.navigationContainer}>
            <div className={homePageStyle.navigationPages}>
              {homePageData.pages.navigation.map(item => (
                <Link
                  className={homePageStyle.navigationLink}
                  key={item.id}
                  to={item.link}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <span className={homePageStyle.greetingsLineDecorationContainer}>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
        </span>
      </section>

      <section className={homePageStyle.sliderContainer}>
        <figure className={homePageStyle.imageHolder}>
          <img
            className={homePageStyle.imageSource}
            src={homePageData.slider.featuredProjects[0].hoverImage.fluid.src}
          />
        </figure>
      </section>
      <section className={homePageStyle.aboutContainer}>
      <span className={homePageStyle.greetingsLineDecorationContainer}>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
        </span>
        {homePageData.about.map(item => (
          <div className={homePageStyle.aboutCard} key={item.id}>
            <div className={homePageStyle.aboutContent}>
              <h3 className={homePageStyle.aboutTitle}>{item.title}</h3>
              <p className={homePageStyle.aboutParagraph}>{item.paragraph}</p>
            </div>
          </div>
        ))}
        <span className={homePageStyle.greetingsLineDecorationContainer}>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
          <div className={homePageStyle.greetingsLineHoleder}>
            <span className={homePageStyle.lineDecoratorWhite}></span>
          </div>
        </span>
      </section>
    </div>
  )
}

export default HomePage
