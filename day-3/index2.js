import express from 'express'

const app = express()

function totalsum(n) {
    let ans =0;
    for (let i=0; i <=n ; i++){
        ans = ans + i
    }
    return ans;
}

app.get("/" , function(req,res){
    const n = req.query.n;

    let ans = totalsum(n)
    console.log(ans)
})

app.listen(3000)