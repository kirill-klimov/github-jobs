import { combineReducers } from 'redux';

import jobsReducer from './jobs/jobs.reducer';
import filterReducer from './filter/filter.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['jobs']
}

const jobsPersistConfig = {
  key: 'jobs',
  storage: storage,
  blacklist: ['fresh']
}

const rootReducer = combineReducers({
  jobs: persistReducer(jobsPersistConfig, jobsReducer),
  filter: filterReducer
});

export default persistReducer(rootPersistConfig, rootReducer);