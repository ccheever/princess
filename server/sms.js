let twilite = require('twilite');
let { twilio } = require('./secrets');

module.exports = twilite(twilio);

