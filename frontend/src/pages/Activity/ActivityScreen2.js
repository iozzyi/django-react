// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, PaddedColumn } from '../../components/Grid';
import { Button, FormHeading, Form, TextInput } from '../../components/Forms';
import * as activityActions from '../../actions/activityActions';

type State = {
  placeName: string | null,
  postcode: number | null,
  buildingUnit: number | null,
  streetNumber: string | null,
  streetName: string | null,
  town: string | null,
};

type Activity2Props = {
  ...State,
  history: *,
  onSaveFormData: (*) => any,
  onSubmitForm: (*) => any,
  onPrevPage: (*) => any,
};

class ActivityScreen2 extends Component<Activity2Props, State> {
  state: State = {
    placeName: this.props.placeName || null,
    postcode: this.props.postcode || null,
    buildingUnit: this.props.buildingUnit || null,
    streetNumber: this.props.streetNumber || null,
    streetName: this.props.streetName || null,
    town: this.props.town || null,
  };

  saveField(fieldName: string, response: any) {
    this.setState({ [fieldName]: response });
  }

  saveForm() {
    const {
      placeName,
      postcode,
      buildingUnit,
      streetNumber,
      streetName,
      town,
    } = this.state;
    const formData = {
      placeName,
      postcode,
      buildingUnit,
      streetNumber,
      streetName,
      town,
    };
    this.props.onSaveFormData(formData);
  }

  prev() {
    this.saveForm();
    this.props.onPrevPage();
  }

  submit() {
    this.saveForm();
    const { placeName, postcode, streetName } = this.state;
    if (placeName && postcode && streetName) {
      this.props.onSubmitForm();
    } else {
      // TODO: show validation errors
    }
  }

  render() {
    const {
      placeName,
      postcode,
      buildingUnit,
      streetNumber,
      streetName,
      town,
    } = this.props;
    return (
      <Form>
        <FormHeading>Add the address</FormHeading>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="placeName"
              labelText="Place Name"
              onChange={event =>
                this.saveField('placeName', event.target.value)
              }
              defaultValue={placeName}
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={{ mobile: 12, desktop: 6 }}>
            <TextInput
              id="postcode"
              labelText="Postcode"
              onChange={event => this.saveField('postcode', event.target.value)}
              defaultValue={postcode}
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={{ mobile: 12, desktop: 6 }}>
            <TextInput
              id="buildingUnit"
              labelText="Building Unit"
              optionalText="Optional"
              onChange={event =>
                this.saveField('buildingUnit', event.target.value)
              }
              defaultValue={buildingUnit}
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="streetNumber"
              labelText="Street Number"
              optionalText="Optional"
              onChange={event =>
                this.saveField('streetNumber', event.target.value)
              }
              defaultValue={streetNumber}
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="streetName"
              labelText="Street Name"
              onChange={event =>
                this.saveField('streetName', event.target.value)
              }
              defaultValue={streetName}
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="town"
              labelText="Town"
              optionalText="Optional"
              onChange={event => this.saveField('town', event.target.value)}
              defaultValue={town}
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={2}>
            <Button onClick={() => this.prev()}>Prev</Button>
          </PaddedColumn>
          <PaddedColumn size={2} shift={8} style={{ textAlign: 'right' }}>
            <Button onClick={() => this.submit()}>Next</Button>
          </PaddedColumn>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = reduxState => ({
  placeName: reduxState.activity.placeName,
  postcode: reduxState.activity.postcode,
  buildingUnit: reduxState.activity.buildingUnit,
  streetNumber: reduxState.activity.streetNumber,
  streetName: reduxState.activity.streetName,
  town: reduxState.activity.town,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSaveFormData: formData => {
      dispatch(activityActions.saveFormData(formData));
    },
    onSubmitForm: () => {
      ownProps.history.push('/review-and-submit');
    },
    onPrevPage: () => {
      ownProps.history.push('/create-an-activity');
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityScreen2);
