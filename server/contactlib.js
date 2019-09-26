let phone = require('phone');
let isemail = require('isemail');

function examineContact(contact) {
  let phoneResult = phone(contact);
  let t = null;
  let n = null;
  if (phoneResult.length > 0) {
    t = 'PHONE';
    n = phoneResult[0];
  } else if (isemail.validate(contact)) {
    t = 'EMAIL';
    // We arbitrarily decide to normalize e-mail addresses
    // to all lowercase
    // This is not technically correct but should be
    // fine for practical purposes.
    n = (isemail.normalize(contact) + '').toLowerCase();
  }

  return {
    type: t,
    contact,
    normalized: n,
  };
}

async function sendMessageToContact(contact) {
    let 
}

module.exports = {
  examineContact,
};
