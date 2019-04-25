// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, PaddedColumn } from '../../components/Grid';
import { Button, FormHeading, Form, TextInput } from '../../components/Forms';
import * as activityActions from '../../actions/activityActions';

type ActivityReviewProps = {
  activityName: string,
  recommendedAgeFrom: string,
  recommendedAgeTo: string,
  activityWebpage: string,
  activityPhoneNumber: string,
  placeName: string,
  postcode: string,
  buildingUnit: string,
  streetNumber: string,
  streetName: string,
  town: string,
  onSubmitForm: (*) => any,
  onPrevPage: (*) => any,
};

class ActivityReview extends Component<ActivityReviewProps> {
  prev() {
    this.props.onPrevPage();
  }

  submit() {
    const {
      activityName,
      recommendedAgeFrom,
      recommendedAgeTo,
      activityWebpage,
      activityPhoneNumber,
      placeName,
      postcode,
      buildingUnit,
      streetNumber,
      streetName,
      town,
    } = this.props;
    const formData = {
      activityName,
      recommendedAgeFrom,
      recommendedAgeTo,
      activityWebpage,
      activityPhoneNumber,
      placeName,
      postcode,
      buildingUnit,
      streetNumber,
      streetName,
      town,
    };
    this.props.onSubmitForm(formData);
  }

  render() {
    const {
      activityName,
      recommendedAgeFrom,
      recommendedAgeTo,
      activityWebpage,
      activityPhoneNumber,
      placeName,
      postcode,
      buildingUnit,
      streetNumber,
      streetName,
      town,
    } = this.props;
    return (
      <Form>
        <FormHeading>About your activity</FormHeading>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="activityName"
              labelText="Activity Name"
              defaultValue={activityName}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="recommendedAgeFrom"
              labelText="Recommended Age From"
              defaultValue={recommendedAgeFrom}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="recommendedAgeTo"
              labelText="Recommended Age To"
              defaultValue={recommendedAgeTo}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="activityWebpage"
              labelText="Activity Webpage"
              defaultValue={activityWebpage}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="activityPhoneNumber"
              labelText="Activity Phone Number"
              defaultValue={activityPhoneNumber}
              disabled
            />
          </PaddedColumn>
        </Row>
        <FormHeading>Activity Address</FormHeading>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="placeName"
              labelText="Place Name"
              defaultValue={placeName}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="postcode"
              labelText="Postcode"
              defaultValue={postcode}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="buildingUnit"
              labelText="Building Unit"
              defaultValue={buildingUnit}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="streetName"
              labelText="Street Name"
              defaultValue={streetName}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="streetNumber"
              labelText="Street Number"
              defaultValue={streetNumber}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={12}>
            <TextInput
              id="town"
              labelText="Town"
              defaultValue={town}
              disabled
            />
          </PaddedColumn>
        </Row>
        <Row>
          <PaddedColumn size={2} shift={10} style={{ textAlign: 'right' }}>
            <Button onClick={() => this.submit()}>Confirm Activity</Button>
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
  placeName: reduxState.activity.placeName,
  postcode: reduxState.activity.postcode,
  buildingUnit: reduxState.activity.buildingUnit,
  streetNumber: reduxState.activity.streetNumber,
  streetName: reduxState.activity.streetName,
  town: reduxState.activity.town,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitForm: formData => {
      dispatch(activityActions.postFormData(formData));
    },
    onPrevPage: () => {
      ownProps.history.push('/add-the-address');
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityReview);
