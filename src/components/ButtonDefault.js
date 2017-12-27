import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

const Button = styled(Link)`
  background-color: transparent;
  outline: 0;
  border: solid 1px rgba(255, 255, 255, 0.15);
  border-radius: 3em;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 0.65em;
  font-weight: bold;
  height: 4.75em;
  letter-spacing: 0.25em;
  line-height: 4.75em;
  padding: 0 3.75em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    border-color: rgba(255, 255, 255, 0.55);
  }

  &:hover::after {
    opacity: 0.05;
    transform: scale(1);
  }

  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 3em;
    opacity: 0;
    transform: scale(0.25);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
`

export default Button;
