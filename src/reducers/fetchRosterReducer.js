export default function reducer (state = {
  data: {}
}, action) {
  switch(action.type) {
    case "FETCH_ROSTER": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_ROSTER_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_ROSTER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data
      }
    }
    default: return state;
  }
}
