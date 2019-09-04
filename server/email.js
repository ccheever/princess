let sendgridMail = require('@sendgrid/mail');

let privateSecretary = require('./private-secretary');

sendgridMail.setApiKey(privateSecretary.sendgrid.apiKey);

module.exports.sendAsync = async (msg) => {
  return await sendgridMail.send(msg);
};
