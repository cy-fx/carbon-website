import React from "react"
import SEO from "../components/seo"
import HomePage from "../components/home-page"
import Footer from "../components/footer"
import HeaderNavigation from "../components/header-navigation"
import "../reusable-styles/slider.scss"

const Test = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <div className="container">
        <article className="scroller">
          <section>
            <h2>Section one</h2>
          </section>
          <section>
            <h2>Section two</h2>
          </section>
          <section>
            <h2>Section three</h2>
          </section>
        </article>
      </div>
    </React.Fragment>
  )
}

export default Test
