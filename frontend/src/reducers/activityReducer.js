// @flow
import type { Address } from '../types/venueTypes';

type ActivityState = {
  name: string,
  webpage: string,
  phoneNumber?: string,
  recommendedAgeFrom: number,
  recommendedAgeTo: number,
  placeName: string,
  postcode: string,
  address: Address,
};

const INITIAL_STATE: ActivityState = {};

export default function reducer(
  state: ExerciseState = INITIAL_STATE,
  action: Object = {}
) {
  switch (action.type) {
    case 'addresses/GET_ADDRESSES': {
      return {
        ...state,
        address: action.payload[0],
      };
    }

    default:
      return state;
  }
}
