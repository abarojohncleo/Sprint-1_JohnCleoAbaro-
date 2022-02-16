const express = require('express');
const app = express();
const apiRoutes = require('./router')
const bodyParser = require('body-parser');

app.use(express.json());

app.listen(3000, function() {
    console.log('listening on 3000')
})

app.use('/sample_proj', apiRoutes);