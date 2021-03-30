import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"
export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
      <Link to="/contact/">Contact</Link>
     </Layout>
    
  );
}