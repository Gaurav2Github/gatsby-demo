import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <h1>About Gatsby</h1>
      <Link to="/contact/">Contact</Link>
      <Header headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  )
}