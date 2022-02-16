const router = require('express').Router();
const exaweb = require('./controllers/users')

router.use('/exaweb', exaweb);

module.exports = router;