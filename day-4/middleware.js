import express from "express"

const app = express()

function ticketChecker(req , res , next){
    const ticket = req.query.ticket;
    if(ticket === "free"){
        next();
    } else {
        res.status(403).send("Access denied")
    }
}
app.use(ticketChecker)

app.get("/ride1" , function(req,res){
    res.send("you rode the first ride")
})
app.get("/ride2" , function(){

    const send = "you rode the ride1"
    console.log(send)
})

app.get("/ride3" , function(){
    res.send("you rode the ride3")
})

app.listen(3000)