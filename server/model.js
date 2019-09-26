let phone = require('phone');

let pgknex = require('./pgknex');
let PrincessError = require('./PrincessError');

async function updateUser$(user) {
  return await pgknex('user').update(user);
}

async function userForMobileNumber$(mobile) {
  let r = phone(mobile);
  let n = r[0];
  if (!n) {
    throw PrincessError('INVALID_MOBILE_NUMBER', `Invalid mobile number: ${mobile}`, {
      number: mobile,
    });
  }
  let userList = await pgknex('user')
    .select('*')
    .where({ mobile: n });
  console.log({ userList });
  return userList;
}

module.exports = {
  userForMobileNumber$,
  updateUser$,
};
