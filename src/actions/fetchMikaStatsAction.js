import axios from 'axios';

export function fetchMikaStats() {
  return function(dispatch) {
    dispatch({type: fetchMikaStats})

    axios.get('https://statsapi.web.nhl.com/api/v1/people/8476459/stats?stats=statsSingleSeason&season=20182019')
      .then((response) => {
        dispatch({
          type: "FETCH_MIKA_STATS_FULFILLED",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_MIKA_STATS_REJECTED",
          payload: err
        })
      })
  }
}
