import {combineReducers} from 'redux';
import fetchTeamsReducer from './fetchTeamsReducer';
import fetchRosterReducer from './fetchRosterReducer';
import fetchMikaReducer from './fetchMikaReducer';
import fetchMikaStatsReducer from './fetchMikaStatsReducer';

export default combineReducers({
  fetchTeamsReducer,
  fetchRosterReducer,
  fetchMikaReducer,
  fetchMikaStatsReducer
})
