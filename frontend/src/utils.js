// @flow

export const HOST_BACKEND =
  process.env.REACT_APP_HOST_BACKEND || process.env.REACT_APP_HOST;
export const HOST_FRONTEND =
  process.env.REACT_APP_HOST_FRONTEND || process.env.REACT_APP_HOST;

export const fetchAndDispatch = (apiUrl: string, dispatchType: string) => (
  dispatch: *
) =>
  fetch(`${HOST_BACKEND}${apiUrl}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': HOST_FRONTEND,
    },
  })
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: dispatchType,
        payload: json,
      })
    )
    .catch(e => console.error(`Failed to fetch data for ${dispatchType}`, e));

export const postAndDispatch = (
  apiUrl: string,
  data: Object,
  dispatchType: string
) => (dispatch: *) =>
  fetch(`${HOST_BACKEND}${apiUrl}`, {
    headers: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': HOST_FRONTEND,
      },
      method: 'POST',
      body: JSON.stringify(data),
    },
  })
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: dispatchType,
        payload: json,
      })
    )
    .catch(e => console.error(`Failed to fetch data for ${dispatchType}`, e));
