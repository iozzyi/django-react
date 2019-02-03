// @flow
import styled from 'styled-components';
import { gridColumn, gridShift, gridPush, gridMedia } from 'neat-components';
import { perBreakpoint } from './utils';

const NeatColumn = styled.div`
  ${props => gridColumn(props.theme, perBreakpoint(props.size).desktop)};
  ${props => gridShift(props.theme, perBreakpoint(props.shift, 0).desktop)};
  ${props => gridPush(props.theme, perBreakpoint(props.push, 0).desktop)};
  ${props =>
    props.theme.laptopGrid &&
    gridMedia(props.theme.laptopGrid, [
      {
        ...gridColumn(props.theme.laptopGrid, perBreakpoint(props.size).laptop),
        ...gridShift(props.theme, perBreakpoint(props.shift, 0).laptop),
        ...gridPush(props.theme, perBreakpoint(props.push, 0).laptop),
      },
    ])};
  ${props =>
    props.theme.tabletGrid &&
    gridMedia(props.theme.tabletGrid, [
      {
        ...gridColumn(props.theme.tabletGrid, perBreakpoint(props.size).tablet),
        ...gridShift(props.theme, perBreakpoint(props.shift, 0).tablet),
        ...gridPush(props.theme, perBreakpoint(props.push, 0).tablet),
      },
    ])};
  ${props =>
    props.theme.mobileGrid &&
    gridMedia(props.theme.mobileGrid, [
      {
        ...gridColumn(props.theme.mobileGrid, perBreakpoint(props.size).mobile),
        ...gridShift(props.theme, perBreakpoint(props.shift, 0).mobile),
        ...gridPush(props.theme, perBreakpoint(props.push, 0).mobile),
      },
    ])};
`;

export default NeatColumn;
