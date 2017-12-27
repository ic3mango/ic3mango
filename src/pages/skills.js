import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import ButtonDefault from '../components/ButtonDefault';

import javascriptSvg from '../images/icons/javascript.svg';
import reactSvg from '../images/icons/react.svg';
import reduxSvg from '../images/icons/redux.svg';
import cssSvg from '../images/icons/css3.svg';
import mongodbSvg from '../images/icons/mongodb.svg';
import gitSvg from '../images/icons/git.svg';


const PageView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: rgba(0, 196, 220, 0.2);
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  color: #888;
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
