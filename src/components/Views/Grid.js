import styled from 'styled-components';

import media from '../../utils/media'

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  color: #888;
  ${media.xs`
    grid-template-columns: 1fr 1fr;
  `}
`;
