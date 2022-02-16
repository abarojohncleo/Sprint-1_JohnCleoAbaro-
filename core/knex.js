const { db } = require('./config');
//34.85.100.54
//10.240.1.3

module.exports = {
    development: {
      client: 'mysql',
      connection: {  
        user: 'root',  
        password: '',  
        host: 'localhost',  
        database: 'exaweb',
        "options": {
          "enableArithAbort": true
        },
       },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    }
  };
  
