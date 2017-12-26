import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Intro = styled.h1`
  font-size: 32px;
  margin-bottom: 100px;
`

const SecondPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <Intro>Hi from the second page</Intro>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
