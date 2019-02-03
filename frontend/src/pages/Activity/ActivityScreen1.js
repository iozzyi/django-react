// @flow
import React from 'react';
import { Row, Column } from '../../components/Grid';
import {
  FormHeading,
  FieldHeading,
  FieldSubheading,
  InputContainer,
  StyledTextInput,
  StyledDropdown,
  DropdownItem,
} from '../../components/Forms';

const ActivityScreen1 = () => (
  <Column size={{ mobile: 12, desktop: 6 }}>
    <FormHeading>About your activity</FormHeading>

    <Row>
      <FieldHeading>Activity Name</FieldHeading>
      <Column size={12}>
        <InputContainer>
          <StyledTextInput />
        </InputContainer>
      </Column>
    </Row>
    <Row>
      <FieldHeading>Recommended Age</FieldHeading>
      <Column size={{ mobile: 12, desktop: 6 }}>
        <InputContainer>
          <StyledDropdown placeholder="From">
            <DropdownItem />
          </StyledDropdown>
        </InputContainer>
      </Column>
      <Column size={{ mobile: 12, desktop: 6 }}>
        <InputContainer>
          <StyledDropdown placeholder="To">
            <DropdownItem />
          </StyledDropdown>
        </InputContainer>
      </Column>
    </Row>
    <Row>
      <FieldHeading>Activity Webpage</FieldHeading>
      <FieldSubheading>
        Use a specific page if possible. Try to avoid homepage links
      </FieldSubheading>
      <Column size={12}>
        <InputContainer>
          <StyledTextInput placeholder="e.g. example.com/activity" />
        </InputContainer>
      </Column>
    </Row>
    <Row>
      <Column size={{ mobile: 6, desktop: 12 }}>
        <FieldHeading hint="Optional">Activity Phone Number</FieldHeading>
        <InputContainer>
          <StyledTextInput />
        </InputContainer>
      </Column>
    </Row>
  </Column>
);

export default ActivityScreen1;
