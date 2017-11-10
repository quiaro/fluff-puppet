import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

/*
 * ----- SELECTORS
 */
export const getAll = state => state.allIds.map(id => state.byId[id]);
export const getIsFetchingSurveys = state => state.isFetching;

/*
 * ----- REDUCERS
 */
const add = handleAction('SURVEYS/ADD', (state, action) => {
  return action.payload.entities.surveys[action.payload.result];
}, {});

const byId = handleAction(
  'SURVEYS/FETCH_DONE',
  (state, action) => {
    // Merge in the result to the previous state
    return Object.assign({}, state, action.payload.entities.surveys);
  },
  {}
);

const allIds = handleAction(
  'SURVEYS/FETCH_DONE',
  (state, action) => action.payload.result,
  []
);

const isFetching = handleActions(
  {
    SURVEYS_FETCH: (state, action) => true,
    'SURVEYS/FETCH_DONE': (state, action) => false,
  },
  false
);

const reducers = combineReducers({
  add,
  byId,
  allIds,
  isFetching,
});

export default reducers;
