import { css } from 'styled-components';

export default {
  small: (...args) => css`
    @media screen and (max-width: 1280px) {
      ${ css(...args) }
    }
  `,
  xs: (...args) => css`
  @media screen and (max-width: 980px) {
    ${ css(...args) }
  }
  `
}
