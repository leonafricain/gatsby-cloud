import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Link style={{marginRight: '15px'}} to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world</p>
      <img src="https://source.unsplash.com/random/450x200" alt="" />
      
    </div>
  )
}
