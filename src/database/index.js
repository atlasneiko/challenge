'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    const usersWithItem = Object.keys(db.itemsOfUserByUsername).filter(
      (username) => db.itemsOfUserByUsername[username].includes(item)
    );
    console.log(usersWithItem);

    const ages = Object.values(db.usersById)
      .filter((user) => usersWithItem.includes(user.username))
      .map((user) => user.age);
    const agesObj = {};
    ages.forEach((age) => {
      if (agesObj[age]) {
        agesObj[age]++;
      } else {
        agesObj[age] = 1;
      }
    });
    return agesObj;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
};
