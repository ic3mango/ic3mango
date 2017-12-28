import React from 'react'
import ButtonDefault from './ButtonDefault';

export default ButtonDefault.extend`
  &:hover::after {
    opacity: 0.2;
  }
  &::after {
    background: #00aa52;
  }
`
