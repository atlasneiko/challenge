import * as API from '../util/requests';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const GET_LIST_OF_AGES_OF_USERS = 'GET_LIST_OF_AGES_OF_USERS';
export const HEALTH_CHECK = 'HEALTH_CHECK';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

const healthCheck = (status) => ({
  type: HEALTH_CHECK,
  status,
});

const receiveAllUsers = (users) => {
  return { type: RECEIVE_ALL_USERS, users };
};

const getListOfAgesOfUsersWith = (ages) => ({
  type: GET_LIST_OF_AGES_OF_USERS,
  ages,
});

export const fetchAllUsers = () => (dispatch) =>
  API.getUsers().then(
    (res) => dispatch(receiveAllUsers(res.data)),
    (errors) => dispatch(receiveErrors(errors))
  );

export const fetchListOfAgesOfUsersWith = (item) => (dispatch) => {
  return API.getListOfAgesOfUsersWith(item).then(
    (res) => dispatch(getListOfAgesOfUsersWith(res.data)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const fetchHealthCheck = () => (dispatch) =>
  API.healthCheck().then(
    (status) => dispatch(healthCheck(status)),
    (errors) => dispatch(errors)
  );
