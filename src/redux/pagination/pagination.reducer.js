import { PaginationActionTypes } from './pagination.types';

const INITIAL_STATE = {
  currentPage: 1
}

const paginationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaginationActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    default: 
      return state;
  }
}

export default paginationReducer;