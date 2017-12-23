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
           <p>{props.tagline}</p>
           <p>{props.summary}</p>
        </AboutMe>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    tagline: PropTypes.string,
    summary: PropTypes.string
}

export default Header;