import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Footer = props => {
    return(
        <footer className='footer'>
            <nav>
                <div className='measure-wide'>
                    <p className='footer-info'>
                    <a className='y-highlight' a href="mailto:eliza.struthersjobin@gmail.com" target="_top">Contact</a>
                    </p>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;
