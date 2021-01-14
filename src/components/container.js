import React from "react"
import containerStyles from "./container.module.css"

export default function Container(props) {
  console.log("containerStyles", containerStyles)
  return <div className={containerStyles.container}>{props.children}</div>
}
