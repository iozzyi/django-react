// @flow
import type { Address } from '../types/venueTypes';

type ActivityState = {
  activityName?: string,
  activityWebpage?: string,
  activityPhoneNumber?: string,
  recommendedAgeFrom?: number,
  recommendedAgeTo?: number,
  placeName?: string,
  postcode?: string,
  buildingUnit?: string,
  streetNumber?: string,
  streetName?: string,
  town?: string,
  address?: Address,
};

const INITIAL_STATE: ActivityState = {};

export default function reducer(
  state: ActivityState = INITIAL_STATE,
  action: Object = {}
) {
  switch (action.type) {
    case 'activity/SAVE_FORM_DATA': {
      return {
        ...state,
        ...action.payload,
      };
    }

    case 'activity/GET_ADDRESSES': {
      return {
        ...state,
        address: action.payload[0],
      };
    }

    default:
      return state;
  }
}
