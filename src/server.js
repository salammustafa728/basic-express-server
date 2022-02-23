'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const app = express();
const validator = require('./middleware/validator');
const notFound = require('./error-handlers/404');
const errorhandler = require('./error-handlers/500')
app.use(express.json());
app.use(cors());

app.use(logger);

app.get('/',(req,res)=>{
    res.send('Home')
})


app.get('/person',validator, (req,res)=>{
    res.status(200).json({name: req.query.name});
})

app.use(errorhandler);
app.use('*',notFound);

function start(port){
    app.listen(port,()=>{
        console.log(`Runing on ${port}`);
    });
}

module.exports = {
    app: app,
    start: start
}