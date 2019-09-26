try {
  module.exports = require('./private-secretary');
} catch (e1) {
  try {
    module.exports = require('../apiServerSecrets');
  } catch (e2) {
    try {
      module.exports = require('/etc/secrets/princessApiServerSecrets');
    } catch (e3) {
      let errorMessage = `
Couldn't load secrets from anywhere.
Either put your secrets in ../../../Dropbox/Castle/private-secretary.js 
or ../apiServerSecrets.js
or /etc/secrets/princessApiServerSecrets.js or
${e1}
${e2}
${e3}
`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
}
