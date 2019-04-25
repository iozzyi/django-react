// @flow
import { gridMedia } from 'neat-components';
import styled from 'styled-components';

import Row from './Row';
import Column from './Column';

const PaddedColumn = styled(Column)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  ${props =>
    props.theme.tabletGrid &&
    gridMedia(props.theme.tabletGrid, [
      {
        padding: '0.5rem 0 0.5rem 0',
      },
    ])};
  ${props =>
    props.theme.mobileGrid &&
    gridMedia(props.theme.mobileGrid, [
      {
        padding: '0.5rem 0 0.5rem 0',
      },
    ])};
`;

export { Row, Column, PaddedColumn };
