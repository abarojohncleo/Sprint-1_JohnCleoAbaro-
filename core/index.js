const TAG = '[DB]';
const { env } = require('./config');
const config = require('./knex')[env];
const connection = require('knex')(config);

connection.on('query', function(data) {
  console.time('query_time');
});

connection.on('query-response', ()=> {
  console.timeEnd('query_time');
})


module.exports = connection;
