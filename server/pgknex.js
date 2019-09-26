let knex = require('knex');
let privateSecretary = require('./secrets');

module.exports = knex({
  client: 'pg',
  connection: {
    host: privateSecretary.postgres.host,
    user: privateSecretary.postgres.user,
    password: privateSecretary.postgres.password,
    database: privateSecretary.postgres.database,
  },
});

