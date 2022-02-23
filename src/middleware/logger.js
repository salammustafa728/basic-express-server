'use strict';

const logger = (req,res,next)=>{
    console.log('Logged @ ', req.method);
    console.log('Logged @ ', req.path);
    next();
}

module.exports = logger;
