const express = require('express')
const cors = require('cors')
const { userModel , todoModel} = require('./db.js')
const jwt = require('jsonwebtoken')
const { auth , JWT_SECRET} = require('./auth.js')


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abhijitam:yY9PI6KA3S2eXLGL@cluster0.wszla.mongodb.net/todo-bootcamo-app')


const app = express()
app.use(express.json())

app.use(cors())

app.post("/signup" , async (req,res) => {
    const email = req.body.email;
    const name = req.body.name ;
    const password = req.body.password;

    await userModel.create({
        email: email,
        password : password,
        name : name
    })

    res.json({
        message:"signed up successfully"
    })

})

app.post("/signin" , async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await userModel.findOne({
        email:email,
        password:password
    })

    if (response){
        const token = jwt.sign({
            id : response._id.toString()
        }, JWT_SECRET)

        res.json({
            token:token
        })
    } else {
        res.status(403).json({
            message : "invalid credential"
        })
    }
})

app.post("/todo" , auth , (req,res) => {
    
})

app.get("/todos" ,auth ,  (req,res) => {
    
})


app.listen(4000 , () => {
    console.log('Server is running on port 3000')
})