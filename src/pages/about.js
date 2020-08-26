import React from "react"
import styles from "./about-css-module.css"
import Layout from "../components/layout"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Layout>
    <div>
      <h1>About me</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </div>
    </Layout>
  )
}
