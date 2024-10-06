function isEven(num1){
    if(num1 % 2==0){
        return true;
    }
    else{
        return false;
    }
}

num1=4;
let result = isEven();
if(result==true){
    console.log("The number is even")
}
else{
    console.log("The number is Odd");
}
 
