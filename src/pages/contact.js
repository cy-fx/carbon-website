import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Contact = () => (
  <React.Fragment>
    <SEO title="Contact" />
    <h2>There's no time like the present.</h2>
    <h2>Get in touch today--</h2>
    <p>hola@carbonagency.com</p>
    <Link to="/">Go back to the Carbon Home Page</Link>
  </React.Fragment>
)

export default Contact
