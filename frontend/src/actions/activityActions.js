//@flow
import { postAndDispatch } from '../utils';

type VenueQuery = {
  placeName?: string,
  postcode?: string,
};

export const getVenues = (query: VenueQuery) =>
  postAndDispatch(`/api/v1/addresses/`, query, 'venues/GET_ADDRESSES');
