export default function reducer (state = {
  data: '',
  teams: []
}, action) {
  switch(action.type) {
    case "FETCH_TEAMS": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_TEAM_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_TEAMS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
        teams: action.payload.teams
      }
    }
    default: return state;
  }
}
