'use strict';

function validator(req,res,next){
        if(req.query.name != null){
            next();
        }else {
            next(`${req.query.name} is not a string`);
        }  
  
}


module.exports = validator;