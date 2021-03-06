import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const AboutMe = styled.div`
  margin-top: 8rem;
  font-size: 1.1em;
`

const Header = props => {
  return (
    <AboutMe className="measure-wide">
      <h1>{props.title}</h1>
      <p>I make things that live on the internet.</p>

      <p>
        Originally from Montreal, Canada, I currently live in Paris, France and
        work as a Creative Technologist.
      </p>

      <p>
        I’m also part of the new media art collective{" "}
        <a className="b-highlight" href="http://graffitiresearchlab.fr/">
          GRLFR
        </a>{" "}
        and make occasional noise with{" "}
        <a className="b-highlight" href="https://offal.github.io/">
          OFFAL
        </a>
        .
      </p>

      <p>
        In my work I like to experiment with sound visualisation, interaction
        and the many paradigms of perception.
      </p>
    </AboutMe>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  summary: PropTypes.string
}

export default Header
