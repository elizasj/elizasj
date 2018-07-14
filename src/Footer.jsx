import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Footer = props => {
    return(
        <footer className='footer'>
            <div className='measure-wide'>
                <a className='footer-info y-highlight' a href="mailto:eliza.struthersjobin@gmail.com" target="_top">Contact</a>
            </div>
        </footer>
    )
}

export default Footer;
