// @flow
import React from 'react';
import { Row, Column } from 'neat-components';
import {
  FormHeading,
  FieldHeading,
  FieldSubheading,
  InputContainer,
  StyledTextInput,
  StyledDropdown,
  DropdownItem,
} from '../../components/Forms';

const ActivityScreen2 = () => (
  <Column size={{ mobile: 12, desktop: 6 }}>
    <FormHeading>Add the address</FormHeading>
    <Row>
      <FieldHeading>Place Name</FieldHeading>
      <Column size={12}>
        <InputContainer>
          <StyledTextInput />
        </InputContainer>
      </Column>
    </Row>
    <Row>
      <FieldHeading>Postcode</FieldHeading>
      <Column size={{ mobile: 12, desktop: 6 }}>
        <InputContainer>
          <StyledTextInput />
        </InputContainer>
      </Column>
    </Row>
    <Row>
      <FieldHeading hint="Optional">Building Unit</FieldHeading>
      <Column size={{ mobile: 12, desktop: 6 }}>
        <InputContainer>
          <StyledTextInput />
        </InputContainer>
      </Column>
    </Row>
    <Row>
      <FieldHeading hint="Optional">Street Number</FieldHeading>
      <Column size={12}>
        <InputContainer>
          <StyledTextInput />
        </InputContainer>
      </Column>
    </Row>
    <Row>
      <FieldHeading>Street Name</FieldHeading>
      <Column size={12}>
        <InputContainer>
          <StyledTextInput />
        </InputContainer>
      </Column>
    </Row>
    <Row>
      <FieldHeading hint="Optional">Town</FieldHeading>
      <Column size={12}>
        <InputContainer>
          <StyledTextInput />
        </InputContainer>
      </Column>
    </Row>
  </Column>
);

export default ActivityScreen2;
