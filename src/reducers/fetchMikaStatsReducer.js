export default function reducer (state = {
  data: {},
  stats: [],
  assists: '',
  blocked: '',
  evenTimeOnIce: '',
  evenTimeOnIcePerGame: '',
  faceOffPct: '',
  gameWinningGoals: '',
  games: '',
  goals: '',
  hits: '',
  overTimeGoals: '',
  penaltyMinutes: '',
  pim: '',
  plusMinus: '',
  points: '',
  powerPlayGoals: '',
  powerPlayPoints: '',
  powerPlayTimeOnIce: '',
  powerPlayTimeOnIcePerGame: '',
  shifts: '',
  shortHandedGoals: '',
  shortHandedPoints: '',
  shortHandedTimeOnIce: '',
  shortHandedTimeOnIcePerGame: '',
  shotPct: '',
  shots: '',
  timeOnIce: '',
  timeOnIcePerGame: ''
}, action) {
  switch(action.type) {
    case "FETCH_MIKA_STATS": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_MIKA_STATS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_MIKA_STATS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        stats: action.payload.stats[0].splits[0].stat,
        assists: action.payload.stats[0].splits[0].stat.assists,
        blocked: action.payload.stats[0].splits[0].stat.blocked,
        evenTimeOnIce: action.payload.stats[0].splits[0].stat.evenTimeOnIce,
        evenTimeOnIcePerGame: action.payload.stats[0].splits[0].stat.evenTimeOnIcePerGame,
        faceOffPct: action.payload.stats[0].splits[0].stat.faceOffPct,
        gameWinningGoals: action.payload.stats[0].splits[0].stat.gameWinningGoals,
        games: action.payload.stats[0].splits[0].stat.games,
        goals: action.payload.stats[0].splits[0].stat.goals,
        hits: action.payload.stats[0].splits[0].stat.hits,
        overTimeGoals: action.payload.stats[0].splits[0].stat.overTimeGoals,
        penaltyMinutes: action.payload.stats[0].splits[0].stat.penaltyMinutes,
        pim: action.payload.stats[0].splits[0].stat.pim,
        plusMinus: action.payload.stats[0].splits[0].stat.plusMinus,
        points: action.payload.stats[0].splits[0].stat.points,
        powerPlayGoals: action.payload.stats[0].splits[0].stat.powerPlayGoals,
        powerPlayPoints: action.payload.stats[0].splits[0].stat.powerPlayPoints,
        powerPlayTimeOnIce: action.payload.stats[0].splits[0].stat.powerPlayTimeOnIce,
        powerPlayTimeOnIcePerGame: action.payload.stats[0].splits[0].stat.powerPlayTimeOnIcePerGame,
        shifts: action.payload.stats[0].splits[0].stat.shifts,
        shortHandedGoals: action.payload.stats[0].splits[0].stat.shortHandedGoals,
        shortHandedPoints: action.payload.stats[0].splits[0].stat.shortHandedPoints,
        shortHandedTimeOnIce: action.payload.stats[0].splits[0].stat.shortHandedTimeOnIce,
        shortHandedTimeOnIcePerGame: action.payload.stats[0].splits[0].stat.shortHandedTimeOnIcePerGame,
        shotPct: action.payload.stats[0].splits[0].stat.shotPct,
        shots: action.payload.stats[0].splits[0].stat.shots,
        timeOnIce: action.payload.stats[0].splits[0].stat.timeOnIce,
        timeOnIcePerGame: action.payload.stats[0].splits[0].stat.timeOnIcePerGame
      }
    }
    default: return state;
  }
}
