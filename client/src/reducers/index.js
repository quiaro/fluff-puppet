import { combineReducers } from 'redux'
import surveys, * as surveySelectors from './surveys'

export const getAllSurveys = (state) => surveySelectors.getAll(state.surveys);
export const getIsFetchingSurveys = (state) => surveySelectors.getIsFetchingSurveys(state.surveys);

const reducers = combineReducers({
  surveys,
})

export default reducers
