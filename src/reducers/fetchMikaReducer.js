export default function reducer (state = {
  data: {},
  mika: []
}, action) {
  switch(action.type) {
    case "FETCH_MIKA": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_MIKA_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_MIKA_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        mika: action.payload.people
      }
    }
    default: return state;
  }
}
