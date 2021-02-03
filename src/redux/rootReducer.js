import { combineReducers } from 'redux';

import jobsReducer from './jobs/jobs.reducer';
import filterReducer from './filter/filter.reducer';

const rootReducer = combineReducers({
  jobs: jobsReducer,
  filter: filterReducer
});

export default rootReducer;