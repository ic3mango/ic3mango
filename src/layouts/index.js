import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import './index.css'

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
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: opacity 1s ease;
  min-height: 100%;
  width: 100%;
  opacity: 1;
`

const Nav = styled.nav`
  display: block;
`

const NavUl = styled.ul`
  list-style-type: none;
`;

const NavItem = styled.li`
  transition: opacity 0.15s ease, transform: 0.75s ease;
  opacity: 1;
  padding: 0;
  position: relative;
`

const StyledLink = styled(Link)`
  display: block;
  color: #fff;
  font-size: 0.65em;
  font-weight: bold;
  letter-spacing: 0.25em;
  line-height: 1.75;
  outline: 0;
  text-decoration: none;
  padding: 1em 0;
  position: relative;
  text-transform: uppercase;
  &::after {
    content: '';
    background: linear-gradient(to right, #5e42a6, #b74e91);
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0.1em;
    width: 100%;
    border-radius: 0.2em;
  }
`

const Wrapper = styled.div`
  #sidebar + & {
    margin-left: 18em;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Stefan Portfolio"
      meta={[
        { name: 'description', content: 'Stefan\'s portfolio site built using React' },
        { name: 'keywords', content: 'portfolio, web-dev, react, gatsby' },
      ]}
    />
    <SideBar id="sidebar">
      <Inner>
        <Nav>
          <NavUl>
            <NavItem><StyledLink>About</StyledLink></NavItem>
            <NavItem><StyledLink>Skills</StyledLink></NavItem>
            <NavItem><StyledLink>Projects</StyledLink></NavItem>
            <NavItem><StyledLink>Contact Me</StyledLink></NavItem>
          </NavUl>
        </Nav>
      </Inner>
    </SideBar>
    <Wrapper>
      {children()}
    </Wrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
