let twilite = require('twilite');
let { twilio } = require('./private-secretary');

module.exports = twilite(twilio);

