import { combineReducers } from 'redux';
import users from './getUsers';
import ages from './getListOfAgesOfUsersWith';
import healthCheck from './healthCheck';
import errors from './errors';
const rootReducder = combineReducers({
  users,
  ages,
  healthCheck,
  errors,
});

export default rootReducder;
