const express = require('express');
const app = express();  
app.use(express.json());

const users = [];


//token generation

function generateToken(){
    let options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F",
    "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V"]

    let token = "";
    for (let i = 0; i<20; i++){
        token+= options[Math.floor(Math.random()*options.length)]
    }
    return token;
}


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
        const token = generateToken();
        user.token = token;
        res.send({
            token
        })

    } else {
        res.status(403).send({
            message:" Invalid username or password"
        })
    }
});

app.get("/profile",(req,res) => {
    const token = req.headers.tokens;
    const user = users.find(user => user.token === token);
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