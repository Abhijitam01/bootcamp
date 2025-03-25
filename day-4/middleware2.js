import express from "express"

const app = express()

app.use(express.json())
function login(req , res , next){
    console.log(`request made to: ` )
    next();
}

app.get("/signin" , login ,(req,res) => {
    res.send("hi their how are you you loged in")
})
app.get("/sum", function(req,res){
    console.log(req.name)
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a+b
    })
})


app.listen(3000 ,() =>{
    console.log("listeing on the port 3000")
})