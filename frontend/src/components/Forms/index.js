import styled from 'react-emotion';
import {
  Button as CarbonButton,
  DropdownV2 as CarbonDropdown,
  Select as CarbonSelect,
  SelectItem as CarbonSelectItem,
  Form as CarbonForm,
  FormGroup as CarbonFormGroup,
} from 'carbon-components-react';

import TextInput from './TextInput';

const FormHeading = styled('h2')``;

const Button = styled(CarbonButton)``;

const Dropdown = styled(CarbonDropdown)``;

const Form = styled(CarbonForm)`
  padding-bottom: 6rem;
`;

const FormGroup = styled(CarbonFormGroup)`
  margin-bottom: 0;
`;

const Select = styled(CarbonSelect)``;
const SelectItem = styled(CarbonSelectItem)``;

export {
  Button,
  Dropdown,
  FormHeading,
  TextInput,
  Form,
  FormGroup,
  Select,
  SelectItem,
};
