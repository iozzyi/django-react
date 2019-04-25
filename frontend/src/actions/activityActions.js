//@flow
import { postAndDispatch } from '../utils';

type VenueQuery = {
  placeName?: string,
  postcode?: string,
};

export const saveFormData = (formData: Object) => ({
  type: 'activity/SAVE_FORM_DATA',
  payload: formData,
});

export const getVenues = (query: VenueQuery) =>
  postAndDispatch(`/api/v1/addresses/`, query, 'activity/GET_ADDRESSES');

export const postFormData = (formData: Object) =>
  postAndDispatch(`/api/v1/activity/`, formData, 'activity/GET_SUMMARY');
