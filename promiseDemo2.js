function demo2(val){
    return new Promise (function (resolve,reject){
        console.log("start Timer")
        setTimeout(function process() {
            console.log("completed timer");
            if(val%2==0){
                //even number
                resolve("Even");
            }else{
                //odd number
                reject("Odd");
            }
            
        }, 1000);
        console.log("Somewhere")
    })
}

let x=demo2(2);
console.log(x);
console.log(x)
