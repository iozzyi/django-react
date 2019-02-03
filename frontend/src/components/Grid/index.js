// @flow
import { gridMedia } from 'neat-components';
import styled from 'styled-components';

import Row from './Row';
import Column from './Column';

const CenteredColumn = styled(Column)`
  margin: auto;
  display: block;
  float: none;
`;

const PaddedColumn = styled(Column)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${props =>
    props.theme.tabletGrid &&
    gridMedia(props.theme.tabletGrid, [
      {
        padding: '1rem 0 1rem 0',
      },
    ])};
  ${props =>
    props.theme.mobileGrid &&
    gridMedia(props.theme.mobileGrid, [
      {
        padding: '1rem 0 1rem 0',
      },
    ])};
`;

export { Row, Column, CenteredColumn, PaddedColumn };
