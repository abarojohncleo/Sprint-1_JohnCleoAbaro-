// const { db } = require('./config');
// //34.85.100.54
// //10.240.1.3

// module.exports = {
//     development: {
//       client: 'mysql',
//       connection: {  
//         user: 'root',  
//         password: '',  
//         host: 'localhost',  
//         database: 'x_store',
//         "options": {
//           "enableArithAbort": true
//         },
//        },
//       pool: {
//         min: 2,
//         max: 10,
//       },
//       migrations: {
//         tableName: 'knex_migrations',
//       },
//     }
//   };
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: '',     
  database: 'exaweb'
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;