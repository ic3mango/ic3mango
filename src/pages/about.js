import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { ButtonDefault } from '../components/Buttons';
import { PageViewTransparent, Inner  } from '../components/Views';

const PageView = PageViewTransparent.extend`
  background-color: rgba(0, 196, 220, 0.2);
`

const IndexPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <PageView>
      <Inner>
        <p>
          Hi, I'm Stefan. I like creating products that solves real problems and improves the lives of the users.
          Frontend development is my main focus and the MERN stack is my preferred tech stack.
          Feel free to contact me for any job opportunities.
        </p>
      </Inner>
    </PageView>
  </div>
)

export default IndexPage
