const express = require('express');
const app = express();  
const jwt = require('jsonwebtoken');
app.use(express.json());

const users = [];
const JWT_SECRET = "JWT_KEYYY"



//signup
app.post("/signup" , (req ,res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })

    res.send({ 
        message: "you are sign up successfully" 
       });
    })
app.post("/signin" , (req ,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password ===  password);

    if(user){
        const token = jwt.sign({
            username: user.username
        },JWT_SECRET);
        user.token = token;
        res.send({
            token
        })

    } else {
        res.status(400).send({
            message:"invalid username or password"
        })
    }
});

app.get("/profile",(req,res) => {
    const token = req.headers.tokens;
    const userDetail = jwt.verify(token,JWT_SECRET);

    const username = userDetail.username;

    const user = users.find(user => user.username === username);
    if(user ){
        res.send({
            username:user.username
        })
    } else {
        res.status(403).send({
            message:" invalid user or unauthorised"
        })
    }
})

app.listen(3000,() => {
    console.log("Server is running on port 3000");
})