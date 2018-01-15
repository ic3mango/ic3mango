import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { ButtonDefault } from '../components/Buttons';
import { PageViewTransparent, Grid } from '../components/Views';

import javascriptSvg from '../images/icons/javascript.svg';
import reactSvg from '../images/icons/react.svg';
import reduxSvg from '../images/icons/redux.svg';
import cssSvg from '../images/icons/css3.svg';
import mongodbSvg from '../images/icons/mongodb.svg';
import gitSvg from '../images/icons/git.svg';


const PageView = PageViewTransparent.extend`
  background-color: rgba(239, 218, 91, 0.25);
`

const Img = styled.img`
  margin: 0 auto;
  max-height: 20vh;
  transform: scale(1);
  transition: transform 0.2s ease;
  &: hover {
    transform: scale(1.1);
  }
`

const SkillsPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <PageView>
      <Grid>
        <Img src={javascriptSvg} />
        <Img src={reactSvg} />
        <Img src={reduxSvg} />
        <Img src={cssSvg} />
        <Img src={mongodbSvg} />
        <Img src={gitSvg} />
      </Grid>
    </PageView>
  </div>
)

export default SkillsPage
