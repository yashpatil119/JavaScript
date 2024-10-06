function fun(){
    console.log("Fun called");
}


function gun(fn){
    console.log("Inside gun");
    fn();
    console.log("leaving gun");
}

gun(function(){
    console.log("new function passed");
    console.trace();
});

gun(fun)