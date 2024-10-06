function fun(){
    let x=20;
    console.log(x);//let is only accesible inside a block
    //let does not allow Reclaration
    //let y=20;
    //let y=9;
    //console.log(y)-->it will through error
}
 fun();
console.log(x);