import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../action/index';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return [...state, ...action.errors];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
