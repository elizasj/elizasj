import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './main.css';


const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="eliza struthers-jobin - web developer"
      meta={[
        { name: 'description', content: 'I make things that live on the internet' },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`