function fun (x,fn){
    // x is an argument
    //fn is callback fn

    for(let i=0;i<x;i++){
        console.log(i);
    }

    fn(); //calling callback function we passed
}

fun(10,function log(){
    //this is callback function
    console.log("custom logger");
})

 