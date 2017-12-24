import React from 'react';
import Link from 'gatsby-link';
import eliza from '../data/data.json';
import styled from 'styled-components';

import Header from '../Header';
import WorkList from '../WorkList';
import Socials from '../Socials';
// recents
const work = 'Recent Work'
const residencies = 'Residencies'
const projects = 'Personal Projects'
const writing = 'Writing'

const IndexPage = ({ data }) => (
  <div>
    <div className='base measure-wide'>
    <Header 
      title={data.site.siteMetadata.title}
    />

    <Socials 
        socials={eliza.socials}
    />
    </div>
    
    <div className='about-me measure-xwide'>
        <WorkList 
          header={work}
          work={eliza.devjobs} 
        />
        <WorkList 
          header={residencies}
          work={eliza.residencies} 
        />
        <WorkList 
          header={projects} 
          work={eliza.projects} 
        />
        <WorkList 
          header={writing} 
          work={eliza.writing} 
        />
    </div>
  </div>
);
    
export default IndexPage;
export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`