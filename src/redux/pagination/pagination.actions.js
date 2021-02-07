import paginationReducer from './pagination.reducer';
import { PaginationActionTypes } from './pagination.types';

export const setCurrentPage = (page) => ({
  type: PaginationActionTypes.SET_CURRENT_PAGE,
  payload: page
})