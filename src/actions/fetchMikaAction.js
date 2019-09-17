import axios from 'axios';

export function fetchMika() {
  return function(dispatch) {
    dispatch({type: fetchMika})

    axios.get('https://statsapi.web.nhl.com/api/v1/people/8476459')
      .then((response) => {
        dispatch({
          type: "FETCH_MIKA_FULFILLED",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_MIKA_REJECTED",
          payload: err
        })
      })
  }
}
