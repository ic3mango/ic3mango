import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import ButtonDefault from '../components/ButtonDefault';

const Inner = styled.div`
  padding: 4em 4em 2em 4em;
`

const Quote = styled.span`
  text-decoration: none;
  padding-left: 18em;
`


const IndexPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <Inner >
      <h1>Stefan's Portfolio</h1>
      <p>Liberty, when it begin to take root, is a plant of rapid growth.<br/>
        <Quote>- George Washington</Quote>
      </p>

      <ButtonDefault to="/about">Find out more</ButtonDefault>
    </Inner>
  </div>
)

export default IndexPage
