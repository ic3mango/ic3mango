import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import ButtonDefault from '../components/ButtonDefault';

const Inner = styled.div`
  padding: 4em 4em 2em 4em;
`

const IndexPage = ({ transition }) => (
  <Inner style={transition && transition.style}>
    <h1>Stefan's Playground</h1>
    <p>Liberty, when it begin to take root, is a plant of rapid growth.</p>
    <ButtonDefault to="/about">Find out more</ButtonDefault>
  </Inner>
)

export default IndexPage
