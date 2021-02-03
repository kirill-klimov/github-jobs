import { FilterActionTypes } from './filter.types';

const INITIAL_STATE = {
  searchValue: '',
  fullTime: false,
  city: '',
  selectedCity: 0,
  cityList: ['London', 'Amsterdam', 'New York', 'Berlin']
}

const filterReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_FULL_TIME:
      return {
        ...state,
        fullTime: !state.fullTime
      };
    case FilterActionTypes.SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case FilterActionTypes.SELECT_CITY:
      return {
        ...state,
        selectedCity: action.payload
      };
    case FilterActionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    default:
      return state;
  }
}

export default filterReducer;