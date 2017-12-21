import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH1 = styled.h1`
color: red;
`;


const Header = props => {
    return(
        <div>
           <StyledH1>{props.title}</StyledH1>
            <p>{props.tagline}</p>
            <p>{props.summary}</p>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    tagline: PropTypes.string,
    summary: PropTypes.string
}

export default Header;