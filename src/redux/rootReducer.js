import { combineReducers } from 'redux';

import jobsReducer from './jobs/jobs.reducer';
import filterReducer from './filter/filter.reducer';
import paginationReducer from './pagination/pagination.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['jobs', 'pagination', 'filter']
}

const jobsPersistConfig = {
  key: 'jobs',
  storage: storage,
  blacklist: ['fresh']
}

const filterPersistConfig = {
  key: 'filter',
  storage: storage,
  blacklist: ['searchValue', 'city']
}

const rootReducer = combineReducers({
  jobs: persistReducer(jobsPersistConfig, jobsReducer),
  filter: persistReducer(filterPersistConfig, filterReducer),
  pagination: paginationReducer
});

export default persistReducer(rootPersistConfig, rootReducer);