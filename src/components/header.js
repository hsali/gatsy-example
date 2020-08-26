import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export default function Header(prop) {
  return (
    <div>
      <h1>{prop.headerText}</h1>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ol>
    </div>
  )
}
