import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Socials = props => {
    const socialMedia = props.socials
    const socialsList = Object.keys(socialMedia).map    (function(social, index) {
        return <li key={index}> {social}</li>
    })


    
    return(
       <div>
            <ul>{socialsList}</ul>
       </div>
    )
}

Socials.propTypes = {
    socials: PropTypes.object,
}
export default Socials;