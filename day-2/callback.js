function step1(callback){
    setTimeout(function (){
        console.log("step1 - completed")
        callback();
    }, 3000)
}
function step2(callback){
    setTimeout(function (){
        console.log("step2 - completed")
        callback();
    }, 3000)
}
function step3(callback){
    setTimeout(function (){
        console.log("step3 - completed")
        callback();
    }, 3000)
}
function step4(callback){
    setTimeout(function (){
        console.log("step4 - completed")
        callback();
    }, 3000)
}

step1(function(){
    step2(function(){
        step3(function(){
            step4(function(){
                console.log("all steps completed")
            })
        })
    })
})