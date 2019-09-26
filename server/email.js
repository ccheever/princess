let sendgridMail = require('@sendgrid/mail');

let privateSecretary = require('./secrets');

sendgridMail.setApiKey(privateSecretary.sendgrid.apiKey);

module.exports.sendAsync = async (msg) => {
  return await sendgridMail.send(msg);
};
