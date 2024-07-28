function fn(inputString ,fn){
    //internal function 
    //executing some algorithm on string

    let output=inputString.split(',');//output is an array
    for(let i=0;i<output.length;i++){
        fn(output[i]);

    }
}


//using it
fun("name:sanket,subject:cse",function process(ip){
    let arr =ip.split(":");
    console.log("{",arr[0],"-->",arr[1],"}");
}); 