import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import ButtonDefault from '../components/ButtonDefault';
import PageViewTransparent from '../components/PageViewTransparent';

const PageView = PageViewTransparent.extend`
  background-color: rgba(239, 218, 91, 0.25);
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
          cynic, iconoclast, crypto investor, and web-developer. An aeronautical engineer by day and programmer by
          night, I wish to one day be able to program a drone to buy takeout food for me so that there will be
          time for coding 😜.
        </p>
      </Inner>
    </PageView>
  </div>
)

export default IndexPage
