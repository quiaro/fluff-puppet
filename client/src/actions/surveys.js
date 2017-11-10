import { normalize, schema } from 'normalizr';
import { createActions } from 'redux-actions';
import * as apiSurveys from '../api/surveys'

const surveys = new schema.Entity('surveys');

const actions = createActions({
  SURVEYS: {
    FETCH_DONE: [
      (data) => normalize(data, [ surveys ]),
      (data, meta) => meta
    ],
    ADD: data => normalize(data, surveys),
  }
}, 'SURVEYS_FETCH');

export const fetchSurveys = () => (dispatch) => {
  dispatch(actions.surveysFetch());
  return apiSurveys.fetchSurveys().then(response => {
      dispatch(actions.surveys.fetchDone(response.data))
    },
    error => {
      dispatch(actions.surveys.fetchDone(error));
    });
}

export const surveyAdded = (survey) => (dispatch) => {
  dispatch(actions.surveys.add(survey));
}
