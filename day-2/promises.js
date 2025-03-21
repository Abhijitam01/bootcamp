function step1(){
    return new Promise((resolve) => {
        setTimeout(function (){
            console.log("step1 - completed")
            resolve();
        }, 3000)
    })
  
}
function step2(){
    return new Promise((resolve) => {
        setTimeout(function (){
            console.log("step2 - completed")
            resolve();
        }, 3000)
    })
  
}
function step3(){
    return new Promise((resolve) => {
        setTimeout(function (){
            console.log("step3 - completed")
            resolve();
        }, 3000)
    })
  
}

step1()
.then(step2)
.then(step3)
.then(() => console.log("everything done"))