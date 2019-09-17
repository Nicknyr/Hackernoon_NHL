import axios from 'axios';

export function fetchRoster() {
  return function(dispatch) {
    dispatch({type: fetchRoster})

    axios.get('https://statsapi.web.nhl.com/api/v1/teams/3/roster')
      .then((response) => {
        dispatch({
          type: "FETCH_ROSTER_FULFILLED",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_ROSTER_REJECTED",
          payload: err
        })
      })
  }
}
