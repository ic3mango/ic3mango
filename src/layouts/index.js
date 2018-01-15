import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import './index.css'
import favIcon from '../images/icons/federalist.png';
import Particles from '../components/Particles';
import { PageViewTransparent as FullScreen } from '../components/Views';
import media from '../utils/media';

const SideBar = styled.div`
  padding: 2.5em 2.5em 0.5em 2.5em;
  background: #312450;
  cursor: default;
  height: 100vh;
  left: 0;
  position: fixed;
  text-align: right;
  width: 18em;
  z-index: 100;
  ${media.small`
    top: 0;
    left: 0;
    width: 100%;
    height: 3.5em;
    line-height: 3.5em;
    padding: 0;
    text-align: center;
  `}
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  #sidebar > & {
    ${media.small`
    flex-direction: row;
    align-items: stretch;
    height: inherit;
    line-height: inherit;
    `}
  }
`

const Nav = styled.nav`
  margin: 0;
  ${media.small`
    height: inherit;
    line-height: inherit;
  `}
`

const NavUl = styled.ul`
  list-style-type: none;
  ${media.small`
    display: flex;
    height: inherit;
    line-height: inherit;
    margin: 0;
  `}
`;

const NavItem = styled.li`
  transition: opacity 0.15s ease, transform: 0.75s ease;
  opacity: 1;
  padding: 0;
  position: relative;
  a {
    display: block;
    color: ${props => props.isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.35)'};
    font-size: 0.65em;
    font-weight: bold;
    letter-spacing: 0.25em;
    line-height: 1.75;
    outline: 0;
    text-decoration: none;
    padding: 1em 0;
    position: relative;
    text-transform: uppercase;
    transition: color 0.2s ease;
    ${media.small`
      height: inherit;
      line-height: inherit;
      padding: 0;
    `}
    &:hover {
      color: rgba(255, 255, 255, 0.55);
    }
    &::after, &::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      height: 0.2em;
      border-radius: 0.2em;
      width: 100%;
    }
    &::before {
      background: #3c2c62;
    }
    &::after {
      background-image: linear-gradient(to right, #5e42a6, #b74e91);
      max-width: ${props => props.isActive ? '100%' : '0'};
      transition: max-width 0.2s ease;
      ${media.small`
        background-image: none;
        background-color: #b74e91;
      `}
    }
  }
  ${media.small`
    display: block;
    height: inherit;
    line-height: inherit;
    margin: 0 1.5em;
  `}
`

const Wrapper = styled.div`
  #sidebar + & {
    margin-left: 18em;
    ${media.small`
      margin: 0;
    `}
  }
`;

const pageList = ['about', 'skills', 'projects', 'contact']

const TemplateWrapper = ({ children, location: { pathname }}) => (
  <div>
    <Helmet
      title="Stefan"
      meta={[
        { name: 'description', content: 'Stefan\'s portfolio site built using React' },
        { name: 'keywords', content: 'portfolio, web-dev, react, gatsby' },
      ]}
      link={[
        { rel: "shotcut icon", type:"image/png", href: `${favIcon}`}
      ]}
    />
    <SideBar id="sidebar">
      <Inner>
        <Nav>
          <NavUl>
            {pageList.map((name, i) =>
              <NavItem key={i} isActive={pathname === `/${name}`}><Link to={`/${name}`}>{name}</Link></NavItem>
            )}
          </NavUl>
        </Nav>
      </Inner>
    </SideBar>
    <Wrapper>
      <FullScreen>
        <Inner>
          {children()}
        </Inner>
        <Particles />
      </FullScreen>
    </Wrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
