import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { ButtonDefault } from '../components/Buttons';
import { Inner } from '../components/Views';

const IndexPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <Inner >
      <h1>Stefan's Portfolio</h1>
      <p>Liberty, when it begin to take root, is a plant of rapid growth.
        <p>- George Washington</p>
      </p>
      <ButtonDefault to="/about">Find out more</ButtonDefault>
    </Inner>
  </div>
)

export default IndexPage
