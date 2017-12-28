import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media screen and (max-width: 1280px) {
      ${ css(...args) }
    }
  `,
  small: (...args) => css`
  @media screen and (max-width: 980px) {
    ${ css(...args) }
  }
  `
}
