// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Column, PaddedColumn } from '../../components/Grid';
import {
  Button,
  FormHeading,
  Form,
  FormGroup,
  Select,
  SelectItem,
  TextInput,
} from '../../components/Forms';
import { activityAges } from './constants';
import * as activityActions from '../../actions/activityActions';

type State = {
  activityName: string | null,
  recommendedAgeFrom: number | null,
  recommendedAgeTo: number | null,
  activityWebpage: string | null,
  activityPhoneNumber: string | null,
};

type ActivityProps = {
  ...State,
  onSaveFormData: (*) => any,
  onSubmitForm: (*) => any,
};

class ActivityScreen1 extends Component<ActivityProps, State> {
  state: State = {
    activityName: this.props.activityName || null,
    recommendedAgeFrom: this.props.recommendedAgeFrom || null,
    recommendedAgeTo: this.props.recommendedAgeTo || null,
    activityWebpage: this.props.activityWebpage || null,
    activityPhoneNumber: this.props.activityPhoneNumber || null,
  };

  saveField(fieldName: string, response: any) {
    this.setState({ [fieldName]: response });
  }

  saveForm() {
    const {
      activityName,
      recommendedAgeFrom,
      recommendedAgeTo,
      activityWebpage,
      activityPhoneNumber,
    } = this.state;
    const formData = {
      activityName,
      recommendedAgeFrom,
      recommendedAgeTo,
      activityWebpage,
      activityPhoneNumber,
    };
    this.props.onSaveFormData(formData);
  }

  submit() {
    this.saveForm();
    const {
      activityName,
      recommendedAgeFrom,
      recommendedAgeTo,
      activityWebpage,
    } = this.state;
    if (
      activityName &&
      recommendedAgeFrom &&
      recommendedAgeTo &&
      activityWebpage
    ) {
      this.props.onSubmitForm();
    } else {
      // TODO: show validation errors
    }
  }

  render() {
    const {
      activityName,
      recommendedAgeFrom,
      recommendedAgeTo,
      activityWebpage,
      activityPhoneNumber,
    } = this.props;
    return (
      <Form>
        <FormHeading>About your activity</FormHeading>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="activityName"
              labelText="Activity Name"
              onChange={event =>
                this.saveField('activityName', event.target.value)
              }
              defaultValue={activityName}
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <FormGroup
              legendText=""
              style={{
                marginInlineStart: '-20px',
                marginInlineEnd: '-20px',
              }}
            >
              <Column size={{ mobile: 12, desktop: 6 }}>
                <Select
                  id="recommendedAgeFrom"
                  onChange={event =>
                    this.saveField('recommendedAgeFrom', event.target.value)
                  }
                  labelText="Recommended age from"
                  defaultValue={recommendedAgeFrom || 'placeholder'}
                >
                  <SelectItem disabled hidden value="placeholder" text="From" />
                  {activityAges.map(age => (
                    <SelectItem
                      key={`recommendedAgeFrom-${age}`}
                      value={age}
                      text={age}
                    />
                  ))}
                </Select>
              </Column>
              <Column size={{ mobile: 12, desktop: 6 }}>
                <Select
                  id="recommendedAgeTo"
                  onChange={event =>
                    this.saveField('recommendedAgeTo', event.target.value)
                  }
                  labelText="Recommended age to"
                  defaultValue={recommendedAgeTo || 'placeholder'}
                >
                  <SelectItem disabled hidden value="placeholder" text="To" />
                  {activityAges.map(age => (
                    <SelectItem
                      key={`recommendedAgeTo-${age}`}
                      value={age}
                      text={age}
                    />
                  ))}
                </Select>
              </Column>
            </FormGroup>
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="activityWebpage"
              labelText="Activity Webpage"
              helperText="Use a specific page if possible. Try to avoid homepage links."
              placeholder="e.g. example.com/activity"
              onChange={event =>
                this.saveField('activityWebpage', event.target.value)
              }
              defaultValue={activityWebpage}
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={{ mobile: 6, desktop: 12 }}>
            <TextInput
              id="activityPhoneNumber"
              labelText="Activity Phone Number"
              optionalText="Optional"
              onChange={event =>
                this.saveField('activityPhoneNumber', event.target.value)
              }
              defaultValue={activityPhoneNumber}
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={2} shift={10} style={{ textAlign: 'right' }}>
            <Button onClick={() => this.submit()}>Next</Button>
          </PaddedColumn>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = reduxState => ({
  activityName: reduxState.activity.activityName,
  recommendedAgeFrom: reduxState.activity.recommendedAgeFrom,
  recommendedAgeTo: reduxState.activity.recommendedAgeTo,
  activityWebpage: reduxState.activity.activityWebpage,
  activityPhoneNumber: reduxState.activity.activityPhoneNumber,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSaveFormData: formData => {
      dispatch(activityActions.saveFormData(formData));
    },
    onSubmitForm: () => {
      ownProps.history.push('/add-the-address');
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityScreen1);
