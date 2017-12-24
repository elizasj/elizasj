import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AboutMe = styled.div`
    margin-top: 8rem;
    font-size: 1.1em;
`

const Header = props => {
    return(
        <AboutMe className='measure-wide'>
           <h1>{props.title}</h1>
           <p>I make things that live on the internet</p>
           <p>I’m a creative who likes to experiment with sound visualisation and explore the many paradigms of perception by creating playful experiences in the browser. Originally from Montreal, Canada, I currently live in Paris, France and work as a Front-End Developer at <a className="b-highlight" href="https://www.scaleway.com/">Scaleway </a>. I’m also part of the new media art collective <a className="b-highlight" href="http://graffitiresearchlab.fr/">GRLFR</a>, and I write and run the creative coding blog <a className="b-highlight" href="http://www.unicornsfartpixels.com/">unicornsfartpixels</a>.</p>
        </AboutMe>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    tagline: PropTypes.string,
    summary: PropTypes.string
}

export default Header;