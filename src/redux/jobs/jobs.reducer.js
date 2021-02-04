import { JobsActionTypes } from './jobs.types';

const INITIAL_STATE = {
  jobs: null,
  error: null,
  isLoaded: false,
  isLoading: false,
  fresh: false
}

const jobsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case JobsActionTypes.FETCH_DATA_START:
      return {
        ...state,
        isLoading: true
      }
    case JobsActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        error: null,
        isLoaded: true,
        isLoading: false,
        fresh: true,
      };
    case JobsActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        jobs: null,
        error: action.payload,
        isLoaded: false,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default jobsReducer;