import { RECEIVE_ALL_USERS } from '../action/index';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};
