import { HEALTH_CHECK } from '../action/index';

export default (state = [], action) => {
  switch (action.type) {
    case HEALTH_CHECK:
      return action.status;
    default:
      return state;
  }
};
