import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import ButtonDefault from '../components/ButtonDefault';
import PageViewTransparent from '../components/PageViewTransparent';

const PageView = PageViewTransparent.extend`
  background-color: rgba(0, 196, 220, 0.2);
`

const Inner = styled.div`
  padding: 4em 4em 2em 4em;
`

const IndexPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <PageView>
      <Inner >
        <p>
          Hi. I'm Stefan. A cosmopolitan, explorer, humanitarian, environmentalist, reader, cyclist,
          cynic, iconoclast, crypto investor, and web-developer.
        </p>
      </Inner>
    </PageView>
  </div>
)

export default IndexPage
