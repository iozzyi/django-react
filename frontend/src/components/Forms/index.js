import styled from 'react-emotion';
import { TextInput, Dropdown } from 'carbon-components-react';

export const FormHeading = styled('h1')`
  height: 29px;
  width: 100%;
  color: #25333d;
  font-family: 'SF Pro Display';
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.33px;
  line-height: 29px;
  text-align: center;
`;

export const FieldHeading = styled('h3')`
  height: 20px;
  width: 100%;
  color: #25333d;
  font-family: 'SF Pro Text';
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.15px;
  line-height: 20px;
`;

export const FieldSubheading = styled('h4')`
  height: 20px;
  width: 100%;
  color: #879299;
  font-family: 'SF Pro Text';
  font-size: 14px;
  letter-spacing: -0.15px;
  line-height: 20px;
`;

export const InputContainer = styled('div')`
  height: 40px;
  width: 100%;
  border: 2px solid rgba(171, 185, 194, 0.32);
  border-radius: 4px;
  background-color: #ffffff;
`;

export const StyledTextInput = styled(TextInput)`
  height: 20px;
  width: 100%;
  color: #879299;
  font-family: 'SF Pro Text';
  font-size: 14px;
  letter-spacing: -0.15px;
  line-height: 20px;
`;

export const StyledDropdown = styled(Dropdown)`
  height: 20px;
  width: 100%;
  color: #879299;
  font-family: 'SF Pro Text';
  font-size: 14px;
  letter-spacing: -0.15px;
  line-height: 20px;
  text-align: right;
`;

export const DropdownItem = styled('option')`
  font-family: 'SF Pro Text';
  font-size: 14px;
  letter-spacing: -0.15px;
  line-height: 20px;
`;
