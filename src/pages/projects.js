import React from 'react';
import Link from 'gatsby-link';
// import Img from 'gatsby-image';
import styled from 'styled-components';
import ButtonDefault from '../components/ButtonDefault';

import projectImage1 from '../images/mockup.png';

console.log(projectImage1);

const Section = styled.section`
  display: block;
  background-color: #5052b5;
`

const ProjectHighlight = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 22.5em;
`
const ProjectImage = styled.a`
  display: block;
  position: relative;
  width: 25em;
  background-image: url(projectImage1) no-repeat;
  background-position: center center;
  background-size: cover;
  cursor: pointer;
`

const ProjectDescription = styled.div`
  padding: 4em 4em 2em 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50em;
`

const ProjectsPage = ({ transition, data }) => (
  <div style={transition && transition.style}>
    <Section>
      <ProjectHighlight>
        <ProjectDescription>why do i do this</ProjectDescription>
      </ProjectHighlight>
    </Section>
  </div>
)

export default ProjectsPage;

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "images/mockup.png" }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        resolutions(width: 125, height: 125) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
