var jwt = require('jsonwebtoken')
var auth={
    validateCredentials: function (req,res) {
        if(!req.body.name||!req.body.email){
            return res.json('Both name and email are required for authentication')
        }
    }
}


modeule.exports=auth;