let a=6;
let b=10;
let c=6;


if(a==b && b==a && c==a){
    console.log("The given triangle is Equilateral Triangle");
}
else if(a==b || b==a || c==a){
    console.log("The given triangle is Isoscale Triangle");
}

else if(a<b+c && b<a+c && c<a+b){
    console.log("The given triangle is Scaler Triangle");
}