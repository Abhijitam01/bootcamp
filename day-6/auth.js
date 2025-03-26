const jwt = require('jsonwebtoken')


const JWT_SECRET = "raman2322"

function auth(req , res , next){
    const token = req.header.tokens;
    const response = jwt.verify(token , JWT_SECRET)
    if (response){
        req.userId = token.userId
        next()
    } else {
        res.status(403).json({
            message : "unauthorized"
        })
    }
}

module.exports = {
    auth ,
    JWT_SECRET
}