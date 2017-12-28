import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ButtonDefault from '../components/ButtonDefault';
import ButtonAlternate from '../components/ButtonAlternate';
import PageViewTransparent from '../components/PageViewTransparent';

import fatevoke from '../images/projects/fatevoke.png';
import barcation from '../images/projects/barcation.png';
import pinflight from '../images/projects/pinflight.png';

const PageView = PageViewTransparent.extend`
  background-color: rgba(183, 78, 145, 0.2);
`

const ProjectHighlight = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 22.5em;
`

const ProjectHighlightSecond = ProjectHighlight.extend`
  background-color: rgba(0, 0, 0, 0.05);
`

const ProjectHighlightThird = ProjectHighlight.extend`
  background-color: rgba(0, 0, 0, 0.1);
`

const ButtonDefaultExternal = ButtonDefault.withComponent('a');
const ButtonAlternateExternal = ButtonAlternate.withComponent('a');


const ProjectImage = styled.a`
  display: inline-block;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0;
  text-decoration: none;
  min-width: 28em;
  cursor: pointer;
`

const ProjectDescription = styled.div`
  padding: 4em 4em 2em 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
`
const ProjectDescriptionInner = styled.div`
`

const ProjectDescriptionActions = styled.div`
  display: flex;
  justify-content: space-around;
`

const ProjectsPage = ({ transition }) => {
  return <div style={transition && transition.style}>
    <PageView>
      {/* Project 1 */}
      <ProjectHighlight>
        <ProjectImage style={{ backgroundImage: `url(${pinflight})`}}/>
        <ProjectDescription>
          <ProjectDescriptionInner>
            <h2>PinFlight</h2>
            <p>Pinterest clone which allows aeronautics hobbyists to share pins of their favorite aeronautics photo. Users are able to save and hide pins and organize them according to categories.
            </p>
            <ProjectDescriptionActions>
              <ButtonDefaultExternal href="https://pinflight.herokuapp.com/" target="_blank">Website</ButtonDefaultExternal>
              <ButtonAlternateExternal href="https://github.com/ic3mango/pinflight" target="_blank">Github</ButtonAlternateExternal>
            </ProjectDescriptionActions>
          </ProjectDescriptionInner>
        </ProjectDescription>
      </ProjectHighlight>
      {/* Project 2 */}
      <ProjectHighlightSecond>
        <ProjectImage style={{ backgroundImage: `url(${barcation})`}}/>
        <ProjectDescription>
          <ProjectDescriptionInner>
            <h2>Barcation</h2>
            <p>Sign in with twitter and indicate your interest in visiting a bar. Other users will be able to connect with you
              via twitter before meeting up at the bar.
            </p>
            <ProjectDescriptionActions>
              <ButtonDefaultExternal href="https://barcation.herokuapp.com/" target="_blank">Website</ButtonDefaultExternal>
              <ButtonAlternateExternal href="https://github.com/ic3mango/Barcation-heroku" target="_blank">Github</ButtonAlternateExternal>
            </ProjectDescriptionActions>
          </ProjectDescriptionInner>
        </ProjectDescription>
      </ProjectHighlightSecond>
      {/* Project 3 */}
      <ProjectHighlightThird>
        <ProjectImage style={{ backgroundImage: `url(${fatevoke})`}}/>
        <ProjectDescription>
          <ProjectDescriptionInner>
            <h2>FateVoke</h2>
            <p>Create polls and share them with your friends or anyone in the world. Anyone can vote and you'll be able to
              see the results of the poll visualized in a PieChart.
            </p>
            <ProjectDescriptionActions>
              <ButtonDefaultExternal href="https://fatevoke.herokuapp.com/" target="_blank">Website</ButtonDefaultExternal>
              <ButtonAlternateExternal href="https://github.com/ic3mango/FateVoke" target="_blank">Github</ButtonAlternateExternal>
            </ProjectDescriptionActions>
          </ProjectDescriptionInner>
        </ProjectDescription>
      </ProjectHighlightThird>
    </PageView>
  </div>
}

export default ProjectsPage;
