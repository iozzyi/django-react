// @flow
import styled from 'styled-components';
import Neat, { gridContainer, gridCollapse } from 'neat-components';

const newGrid = (columns: number = 12, gutter: string = '0px') =>
  Neat({
    columns,
    gutter,
  });

const NeatGridContainer = styled.div`
  ${props =>
    gridCollapse(newGrid(props.columns, props.gutterSize))} ${gridContainer()};
`;

export default NeatGridContainer;
