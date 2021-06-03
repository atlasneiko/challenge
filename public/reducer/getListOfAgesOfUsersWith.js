import { GET_LIST_OF_AGES_OF_USERS } from '../action/index';

export default (state = [], action) => {
  switch (action.type) {
    case GET_LIST_OF_AGES_OF_USERS:
      return action.ages;
    default:
      return state;
  }
};
