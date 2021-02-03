import { FilterActionTypes } from './filter.types';

export const toggleFullTime = () => ({
  type: FilterActionTypes.TOGGLE_FULL_TIME
})

export const setCity = (city) => ({
  type: FilterActionTypes.SET_CITY,
  payload: city
})

export const selectCity = (index) => ({
  type: FilterActionTypes.SELECT_CITY,
  payload: index
})

export const setSearchValue = (value) => ({
  type: FilterActionTypes.SET_SEARCH_VALUE,
  payload: value
})