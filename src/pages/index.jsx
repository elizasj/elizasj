import React from 'react';
import Link from 'gatsby-link';
import eliza from '../data/data.json';

import Header from '../Header';
import WorkList from '../WorkList';
import Socials from '../Socials';

// header 
const tagline = 'I make things that live on the internet';
const summary = 'I’m a creative who likes to experiment with sound visualisation and explore the many paradigms of perception by creating playful experiences in the browser. Originally from Montreal, Canada, I currently live in Paris, France and work as a Front-End Developer at Scaleway. I’m also part of the new media art collective GRLFR, and I write and run the creative coding blog unicornsfartpixels.com. ';

// recents
const work = 'Recent Work'
const residencies = 'Residencies'
const projects = 'Personal Projects'



const IndexPage = ({ data }) => (
  <div>
    <Header 
      title={data.site.siteMetadata.title}
      tagline={tagline}
      summary={summary}
    />
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
    <Socials 
      socials={eliza.socials}
    />
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