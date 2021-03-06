import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

import Layout from "../components/layout"
export default function Contact() {
  return (
    <Layout>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
      <Link to="/">Home</Link>
    </Layout>
    
  )
}