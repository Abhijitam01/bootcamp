const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/sum" , function(req,res){
    const a  = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans : a+b
    })
})



app.listen(3000 , ()  => {
    console.log("Server is running on port 3000")
})