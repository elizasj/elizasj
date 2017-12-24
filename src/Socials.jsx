import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SocialMedia = styled.ul`
    justify-content: space-between;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 25%;
`

const Socials = props => {
    const socialMedia = props.socials
    const socialsList = Object.entries(socialMedia).map   
    (function([key, value], index) {
        return <li key={index}><a className='y-highlight' href={value}>{key}</a></li>
    })

    return(
       <div>
           <nav>
                <SocialMedia className='measure-wide'>{socialsList}</SocialMedia>
            </nav>
       </div>
    )
}

Socials.propTypes = {
    socials: PropTypes.object
}

export default Socials;