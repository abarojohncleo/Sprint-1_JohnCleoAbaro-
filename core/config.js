const successTypes = require('./success-types');
const errorTypes = require('./error-types');

module.exports = {
  env: process.env.env || 'development',
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    name: process.env.DB_NAME || '',
    sslKey: process.env.DB_SSL_KEY,
  },
  email: {
    service: process.env.SMTP_SERVICE,
    user: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD
  },
  successTypes,
  errorTypes
};
